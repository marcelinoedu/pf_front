"use client";

import { useState, type FormEvent } from "react";
import { cadastrar } from "./api";
import { MensagemErro } from "./mensagem-erro";

export function FormularioArtigo({ emailCriador, onSaved }: {
  emailCriador?: string;
  onSaved: () => void;
}) {
  const [enviando, setEnviando] = useState(false);
  const [salvo, setSalvo] = useState(false);
  const [erro, setErro] = useState<Error | null>(null);

  async function salvar(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const entrada = new FormData(form);
    setSalvo(false);
    setErro(null);
    setEnviando(true);

    try {
      await cadastrar({
        emailCriador: String(entrada.get("emailCriador")).trim(),
        titulo: String(entrada.get("titulo")).trim(),
        descricao: String(entrada.get("descricao")).trim(),
      });
      form.reset();
      setSalvo(true);
      onSaved();
    } catch (error) {
      setErro(error instanceof Error ? error : new Error("Não foi possível salvar a avaliação."));
    } finally {
      setEnviando(false);
    }
  }

  return (
    <section className="panel" aria-labelledby="nova-avaliacao">
      <div className="panel-heading"><h2 id="nova-avaliacao">Nova avaliação</h2></div>
      <form onSubmit={salvar} className="panel-body">
        {!emailCriador && <p className="feedback error">Verifique seu e-mail no Auth0 e entre novamente para cadastrar.</p>}
        <fieldset disabled={enviando || !emailCriador}>
          <label>
            E-mail do criador
            <input value={emailCriador ?? ""} type="email" readOnly />
          </label>
          <label>
            Título
            <input name="nota" type="text" placeholder="Título do artigo" required />
          </label>
          <label>
            Descrição
            <textarea name="descrição" placeholder="Escreva sua descrição" required rows={4} />
          </label>
          <button className="button primary" type="submit">{enviando ? "Salvando…" : "Cadastrar artigo"}</button>
        </fieldset>
        {erro && <MensagemErro erro={erro} />}
        {salvo && <p className="feedback success" role="status">Artigo cadastrado.</p>}
      </form>
    </section>
  );
}
