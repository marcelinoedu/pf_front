module.exports = [
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/src/app/api/avaliacoes/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/backend.ts [app-route] (ecmascript)");
;
function GET(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forwardToBackend"])("/avaliacoes", request);
}
function POST(request) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$backend$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["forwardToBackend"])("/avaliacoes", request);
}
}),
"[project]/src/lib/auth0.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "auth0",
    ()=>auth0,
    "emailClaim",
    ()=>emailClaim,
    "rolesClaim",
    ()=>rolesClaim
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$server$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@auth0/nextjs-auth0/dist/server/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$server$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@auth0/nextjs-auth0/dist/server/client.js [app-route] (ecmascript)");
;
const rolesClaim = "https://avaliacoes.example.com/roles";
const emailClaim = "https://avaliacoes.example.com/email";
const auth0 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$auth0$2f$nextjs$2d$auth0$2f$dist$2f$server$2f$client$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Auth0Client"]({
    authorizationParameters: {
        audience: process.env.AUTH0_AUDIENCE,
        scope: "openid profile email offline_access"
    },
    enableAccessTokenEndpoint: false,
    async beforeSessionSaved (session) {
        const { sub, name, email } = session.user;
        return {
            ...session,
            user: {
                sub,
                name,
                email,
                [rolesClaim]: session.user[rolesClaim],
                [emailClaim]: session.user[emailClaim]
            }
        };
    }
});
}),
"[project]/src/lib/backend.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "forwardToBackend",
    ()=>forwardToBackend,
    "problem",
    ()=>problem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth0.ts [app-route] (ecmascript)");
;
const noStore = {
    "Cache-Control": "no-store"
};
function problem(status, detail) {
    return Response.json({
        status,
        detail
    }, {
        status,
        headers: noStore
    });
}
async function forwardToBackend(path, request) {
    if (!await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth0"].getSession()) {
        return problem(401, "Entre novamente para acessar as avaliações.");
    }
    const backend = process.env.BACKEND_URL;
    const app = process.env.APP_BASE_URL;
    if (!backend || !app) {
        return problem(503, "O serviço de avaliações ainda não está configurado.");
    }
    const headers = new Headers({
        Accept: "application/json, application/problem+json"
    });
    let body;
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
        const { token } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth0$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["auth0"].getAccessToken();
        headers.set("Authorization", `Bearer ${token}`);
    } catch  {
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
            signal: AbortSignal.timeout(10_000)
        });
        if (response.status >= 500) {
            return problem(502, "O serviço de avaliações está indisponível.");
        }
        const contentType = response.headers.get("content-type");
        const responseHeaders = new Headers(noStore);
        if (contentType) responseHeaders.set("Content-Type", contentType);
        return new Response(response.body, {
            status: response.status,
            headers: responseHeaders
        });
    } catch  {
        return problem(502, "Não foi possível conectar ao serviço de avaliações.");
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1qvgmobgic_y8._.js.map