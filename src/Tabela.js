import React from 'react';

const TableHead = () => {
    return (
        <thead>
        <tr>
          <th>Autores</th>
          <th>Livros</th>
          <th>Preços</th>
          <th>Remover</th>
        </tr>
      </thead>
    )
}

const TableBody = props => {
    const linhas = props.autores.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.livro}</td>
                <td>{linha.preco}</td>
                <td><button onClick={() => props.removeAutor(index)} className="waves-effect waves-light btn indigo lighten-2">Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

export default function Tabela(props) {
    
    const { autores, removeAutor } = props

    return (
    <table className="centered highlight">
        <TableHead/>
        <TableBody autores={autores} removeAutor={removeAutor}/>
      </table>
    )
}