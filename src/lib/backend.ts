import { auth0 } from "@/lib/auth0";

const noStore = { "Cache-Control": "no-store" };

export function problem(status: number, detail: string) {
  return Response.json({ status, detail }, { status, headers: noStore });
}

export async function forwardToBackend(path: string, request: Request) {
  if (!await auth0.getSession()) {
    return problem(401, "Entre novamente para acessar as avaliações.");
  }

  const backend = process.env.BACKEND_URL;
  const app = process.env.APP_BASE_URL;
  if (!backend || !app) {
    return problem(503, "O serviço de avaliações ainda não está configurado.");
  }

  const headers = new Headers({ Accept: "application/json, application/problem+json" });
  let body: string | undefined;
  if (request.method === "POST") {
    if (request.headers.get("origin") !== new URL(app).origin) {
      return problem(403, "Origem da solicitação inválida.");
    }
    if (request.headers.get("content-type")?.split(";")[0] !== "application/json") {
      return problem(415, "Envie a avaliação em JSON.");
    }
    body = await request.text();
    if (body.length > 16_384) {
      return problem(413, "A avaliação excede o tamanho permitido.");
    }
    headers.set("Content-Type", "application/json");
  }

  try {
    const { token } = await auth0.getAccessToken();
    headers.set("Authorization", `Bearer ${token}`);
  } catch {
    return problem(401, "Sua sessão expirou. Entre novamente.");
  }

  try {
    const url = new URL(path, backend);
    url.search = new URL(request.url).search;
    const response = await fetch(url, {
      method: request.method,
      headers,
      body,
      cache: "no-store",
      redirect: "error",
      signal: AbortSignal.timeout(10_000),
    });

    if (response.status >= 500) {
      return problem(502, "O serviço de avaliações está indisponível.");
    }
    const contentType = response.headers.get("content-type");
    const responseHeaders = new Headers(noStore);
    if (contentType) responseHeaders.set("Content-Type", contentType);
    return new Response(response.body, { status: response.status, headers: responseHeaders });
  } catch {
    return problem(502, "Não foi possível conectar ao serviço de avaliações.");
  }
}
