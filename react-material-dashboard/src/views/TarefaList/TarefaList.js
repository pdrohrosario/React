import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TarefasToolbar, TarefasTable } from './components';
import { bindActionCreators } from 'redux'
import { connect }from 'react-redux'
import { listar, salvar, deletar, alterarStatus } from '../../store/tarefasReducer'
import { esconderMensagem } from '../../store/mensagensReducer'

import{
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button
}from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3),
  },
  content: {
    marginTop: theme.spacing(2),
    [theme.breakpoints.down('md')]: {
      marginTop: theme.spacing(10)
    }
  }
}));

const API_URL = 'https://minhastarefas-api.herokuapp.com/tarefas';


const TarefaList = (props) => {
  const classes = useStyles();

  useEffect(()=> {
    props.listar();
  }, [])

  return (
    <div className={classes.root}>
      <TarefasToolbar salvar={props.salvar}/>
      <div className={classes.content}>
        <TarefasTable
          AlterarStatus={props.alterarStatus}
          deleteAction={props.deletar}
          tarefas={props.tarefas}
        />
      </div>
      <Dialog
        onClose={props.esconderMensagem}
        open={props.openDialog}
      >
        <DialogTitle>
          Atenção
        </DialogTitle>
        <DialogContent>
          {props.mensagem}
        </DialogContent>
        <DialogActions>
          <Button onClick={props.esconderMensagem}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapStateToProps = state =>({
  tarefas: state.tarefas.tarefas,
  mensagem: state.mensagens.mensagem,
  openDialog: state.mensagens.mostrarMensagem,
})

const mapDispatchToProps = dispatch => bindActionCreators({listar,salvar, deletar, alterarStatus, esconderMensagem},dispatch)

export default connect(mapStateToProps,mapDispatchToProps)(TarefaList);
