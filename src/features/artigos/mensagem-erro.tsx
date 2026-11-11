import { ApiError } from "./api";

export function MensagemErro({ erro }: { erro: Error }) {
  return (
    <p className="feedback error" role="alert">
      {erro.message} {erro instanceof ApiError && erro.status === 401 && <a href="/auth/login">Entrar novamente</a>}
    </p>
  );
}
