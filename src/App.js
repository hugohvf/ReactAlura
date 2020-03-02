import React, { useState } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './App.css';
import Tabela from './Tabela';
import Header from './Header';

import Form from './Formulario';

function App() {
  const [autores, setAutores] = useState([
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000'
    },
    {
      nome: 'Daniel',
      livro: 'Java',
      preco: '99'
    },
    {
      nome: 'Marcos',
      livro: 'Design',
      preco: '150'
    },
    {
      nome: 'Bruno',
      livro: 'DevOps',
      preco: '100'
    },
    {
      nome: 'Hugo',
      livro: 'React Native',
      preco: '5k'
    }
  ]);

  function escutadorDeSubmit(autor) {
    console.log(autor)
    setAutores([...autores,autor]);
  }

  function removeAutor(index) {
    setAutores(autores.filter((autor, posAtual) => {
      console.log(index, posAtual)
      return index !== posAtual;
    }));
  };

  return (
    <>
      <Header />
      <div className="container mb-10">
        <Tabela autores={autores} removeAutor={removeAutor} />
        <Form escutadorDeSubmit={escutadorDeSubmit} />
      </div>
    </>
  );
}

export default App;
