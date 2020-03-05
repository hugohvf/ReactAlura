import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

const CellDeleta = ({removeDados, id}) => {
    if (!removeDados) {
        return null
    }

        return(
            <TableCell>
                <Button 
                    onClick={ () => {
                        removeDados(id)
                    }} 
                    variant="contained"
                    color="primary"
                >
                    Remover
                </Button>
            </TableCell>
        )

}

const TituloDeleta = ({removeDados}) => {
    if (!removeDados) {
        return null
    }
    return <TableCell>Remover</TableCell>
}

const Tabela = props => {

    const { campos, dados, removeDados } = props;
    
    return(
        <Table>
        <TableHead>
          <TableRow>
              {
                  campos.map((campo) => (
                      <TableCell>{campo.titulo}</TableCell>
                  ))
              }
              <TituloDeleta removeDados={removeDados} />
          </TableRow>
        </TableHead>
        
        <TableBody>
            {dados.map((dado)=>{
            return( 
            <TableRow key={dado.id}>
                {
                    campos.map(campo => (
                         <TableCell>{dado[campo.dado]}</TableCell>
                    ))
                }
                <CellDeleta
                    id={dado.id}
                    removeDados={removeDados}
                ></CellDeleta>
             </TableRow>
            );
         })}
        </TableBody>
        </Table>
        );
    

}
export default Tabela;