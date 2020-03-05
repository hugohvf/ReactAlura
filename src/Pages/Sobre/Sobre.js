import React, { Fragment } from 'react';
import Header from '../../Components/Header/Header';
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import {makeStyles} from '@material-ui/core/styles'

const useEstilos = makeStyles({
    titulo: {
        textAlign: 'center',
        color: 'blue'
    },
    body: {
        textAlign: 'center',
        fontSize: 18
    }
})

const Sobre = () => {const classes = useEstilos()
    return (
    <Fragment>
        <Header />
        <Container maxWidth='sm' >
            <Typography 
                className={classes.titulo}
                variant='h1' 
                component='h2'>
                Sobre
            </Typography>
            <Typography className={classes.body} variant='body1' component='p'>
                A casa do código é uma casa que faz código em diversos formatos
            </Typography>
        </Container>
    </Fragment>
    )
}
export default Sobre;