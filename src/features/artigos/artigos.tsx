"use client";

import { useEffect, useState } from "react";
import { listar, remover, type Pagina } from "./api";
import { FormularioArtigo } from "./formulario";
import { MensagemErro } from "./mensagem-erro";

export function Artigos({ podeCadastrar, emailCriador }: {
  podeCadastrar: boolean;
  emailCriador?: string;
}) {
  const [pagina, setPagina] = useState(0);
  const [revisao, setRevisao] = useState(0);
  const [dados, setDados] = useState<Pagina | null>(null);
  const [erro, setErro] = useState<Error | null>(null);
  const [removendoId, setRemovendoId] = useState<number | null>(null);

  useEffect(() => {
    const controller = new AbortController();
    listar(pagina, controller.signal)
      .then(setDados)
      .catch((error: Error) => {
        if (!controller.signal.aborted) setErro(error);
      });
    return () => controller.abort();
  }, [pagina, revisao]);

  function carregar(indice: number) {
    setDados(null);
    setErro(null);
    setPagina(indice);
    setRevisao((valor) => valor + 1);
  }

  async function handleRemover(id: number) {
    if (!window.confirm("Tem certeza que deseja remover este artigo?")) return;

    try {
      setRemovendoId(id);
      await remover(id);
      // Volta uma página se apagou o último item da página atual
      const novaPagina = dados && dados.itens.length === 1 && pagina > 0 ? pagina - 1 : pagina;
      carregar(novaPagina);
    } catch (error) {
      setErro(error as Error);
    } finally {
      setRemovendoId(null);
    }
  }

  return (
    <div className={podeCadastrar ? "dashboard with-form" : "dashboard"}>
      <section className="panel history" aria-labelledby="historico">
        <div className="panel-heading">
          <h2 id="historico">Histórico</h2>
          {dados && <span className="count">{dados.total} {dados.total === 1 ? "artigo" : "artigos"}</span>}
        </div>
        {erro ? (
          <div className="panel-body">
            <MensagemErro erro={erro} />
            <button type="button" className="button quiet" onClick={() => carregar(pagina)}>Tentar novamente</button>
          </div>
        ) : !dados ? (
          <p className="panel-body muted" role="status">Carregando artigos…</p>
        ) : dados.itens.length === 0 ? (
          <p className="panel-body muted">Nenhum artigo cadastrado.</p>
        ) : (
          <div className="table-scroll" tabIndex={0} role="region" aria-label="Tabela de artigos">
            <table>
              <thead>
                <tr>
                  <th scope="col">Criador</th>
                  <th scope="col">Título</th>
                  <th scope="col">Descrição</th>
                  {podeCadastrar && <th scope="col">Ações</th>}
                </tr>
              </thead>
              <tbody>
                {dados.itens.map((item) => (
                  <tr key={item.id}>
                    <td><strong>{item.emailCriador}</strong></td>
                    <td className="titulo">{item.titulo}</td>
                    <td className="descricao">{item.descricao}</td>
                    {podeCadastrar && (
                      <td>
                        <button
                          type="button"
                          className="button quiet"
                          disabled={removendoId === item.id}
                          onClick={() => handleRemover(item.id)}
                        >
                          {removendoId === item.id ? "Removendo..." : "Remover"}
                        </button>
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {dados && dados.totalPaginas > 1 && (
          <nav className="pagination" aria-label="Paginação do histórico">
            <button type="button" className="button quiet" disabled={pagina === 0} onClick={() => carregar(pagina - 1)}>Anterior</button>
            <span>Página {pagina + 1} de {dados.totalPaginas}</span>
            <button type="button" className="button quiet" disabled={pagina + 1 >= dados.totalPaginas} onClick={() => carregar(pagina + 1)}>Próxima</button>
          </nav>
        )}
      </section>
      {podeCadastrar && (
        <FormularioArtigo emailCriador={emailCriador} onSaved={() => carregar(0)} />
      )}
    </div>
  );
}
