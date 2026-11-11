export type Artigos = {
  id: number;
  emailCriador: string;
  titulo: string;
  descricao: string;
  
};

export type Pagina = {
  itens: Artigos[];
  pagina: number;
  tamanho: number;
  total: number;
  totalPaginas: number;
};

type NovoArtigo = Pick<Artigos, "emailCriador" | "titulo" | "descricao">;

export class ApiError extends Error {
  constructor(readonly status: number, message: string) {
    super(message);
  }
}

async function call<T>(query: string, options?: RequestInit): Promise<T> {
  const response = await fetch(`/api/artigos${query}`, options);
  if (response.ok) return response.json();

  const data = await response.json().catch(() => null);
  const fallbacks: Record<number, string> = {
    400: "Confira os campos da avaliação.",
    401: "Sua sessão expirou. Entre novamente.",
    403: "Sua conta não tem permissão para esta ação.",
  };
  const message = data?.campos
    ? Object.values(data.campos).join(" ")
    : data?.detail ?? fallbacks[response.status] ?? "Não foi possível concluir a solicitação.";
  throw new ApiError(response.status, message);
}

export function listar(pagina: number, signal: AbortSignal) {
  return call<Pagina>(`?pagina=${pagina}`, { signal });
}

export function cadastrar(entrada: NovoArtigo) {
  return call<Artigos>("", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(entrada),
  });
}

export function remover(id: number) {
  return call<void>(`/${id}`, { method: "DELETE" });
}
