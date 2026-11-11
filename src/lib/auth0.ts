import { Auth0Client } from "@auth0/nextjs-auth0/server";

export const rolesClaim = "https://avaliacoes.example.com/roles";
export const emailClaim = "https://avaliacoes.example.com/email";

export const auth0 = new Auth0Client({
  authorizationParameters: {
    audience: process.env.AUTH0_AUDIENCE,
    scope: "openid profile email offline_access",
  },
  enableAccessTokenEndpoint: false,
  async beforeSessionSaved(session) {
    const { sub, name, email } = session.user;
    return {
      ...session,
      user: {
        sub,
        name,
        email,
        [rolesClaim]: session.user[rolesClaim],
        [emailClaim]: session.user[emailClaim],
      },
    };
  },
});
