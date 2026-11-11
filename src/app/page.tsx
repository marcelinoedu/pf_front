import { Artigos } from "@/features/artigos/artigos";
import { auth0, emailClaim, rolesClaim } from "@/lib/auth0";

export default async function Home() {
  const session = await auth0.getSession();
  const roles = session?.user[rolesClaim];
  const isAdmin = Array.isArray(roles) && roles.includes("ADMIN");
  const canRead = isAdmin || (Array.isArray(roles) && roles.includes("USER"));
  const verifiedEmail = session?.user.email;

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <div className="brand"><span className="brand-mark" aria-hidden="true">✓</span> Artigos</div>
          {session && (
            <div className="account">
              <span>{session.user.email ?? session.user.name}</span>
              <a href="/auth/logout" className="button quiet">Sair</a>
            </div>
          )}
        </div>
      </header>
      <main className="shell">
        {!session ? (
          <section className="signin">
            <h1>Artigos</h1>
            <p>Entre com sua conta para acessar os artigos</p>
            <a href="/auth/login" className="button primary">Entrar com Auth0 <span aria-hidden="true">↗</span></a>
          </section>
        ) : (
          <>
            <div className="page-heading">
              <h1>Artigos</h1>
              <p>Consulte o histórico de avaliações da empresa.</p>
            </div>
            {canRead ? (
              <Artigos
                podeCadastrar={isAdmin}
                emailCriador={typeof verifiedEmail === "string" ? verifiedEmail : undefined}
              />
            ) : (
              <div className="panel notice">Sua conta precisa do perfil ADMIN ou USER para acessar as avaliações.</div>
            )}
          </>
        )}
      </main>
    </>
  );
}
