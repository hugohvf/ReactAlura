import React, { useState } from "react";

export default function Formulario(props) {
  const [nome, setNome] = useState(props.nome);
  const [livro, setLivro] = useState(props.livro);
  const [preco, setPreco] = useState(props.preco);

  return (
    <form>
      <div className="row">
        <div className="input-field col s4">
          <label className="input-field" htmlFor="nome">Nome</label>
          <input
            className="validate"
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={i => {
              setNome(i.target.value);
            }}
          />
        </div>
        <div className="input-field col s4">
          <label className="input-field" htmlFor="livro">Livro</label>
          <input
            className="validate"
            id="livro"
            type="text"
            name="livro"
            value={livro}
            onChange={i => setLivro(i.target.value)}
          />
        </div>
        <div className="input-field col s4">
          <label className="input-field" htmlFor="preco">Preco</label>
          <input
            className="validate"
            id="preco"
            type="text"
            name="preco"
            value={preco}
            onChange={i => setPreco(i.target.value)}
          />
        </div>
      </div>
      <button
        className="waves-effect waves-light btn indigo lighten-2"
        type="button"
        onClick={() => {
          props.escutadorDeSubmit({ nome, livro, preco });
          setNome("");
          setLivro("");
          setPreco("");
        }}
      >
        Salvar
      </button>
    </form>
  );
}
