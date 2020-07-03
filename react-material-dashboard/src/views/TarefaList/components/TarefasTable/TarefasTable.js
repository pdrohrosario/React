import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,  
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  IconButton
  
} from '@material-ui/core';

//Icons
import TimerIcon from '@material-ui/icons/Timer';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const TerefasTable = props => {
  const { className, tarefas, ...rest } = props;

  const classes = useStyles();
  

  return (
    <Card
      {...rest}
      className={clsx(classes.root, className)}
    >
      <CardContent className={classes.content}>
        <PerfectScrollbar>
          <div className={classes.inner}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Código</TableCell>
                  <TableCell>Descrição</TableCell>
                  <TableCell>Categoria</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell />
                  <TableCell />
                </TableRow>
              </TableHead>
              <TableBody>
                {tarefas.map( tarefa => {
                  return(
                    <TableRow key={tarefa.id}>
                      <TableCell>{tarefa.id}</TableCell>
                      <TableCell>{tarefa.descricao}</TableCell>
                      <TableCell>{tarefa.categoria}</TableCell>
                      <TableCell>{tarefa.done ? 'Feito' : 'Pendente'}</TableCell>
                      <TableCell>
                        <IconButton onClick={e => props.AlterarStatus(tarefa.id)}>
                          {tarefa.done ?
                            (
                              <DoneAllIcon style={{ color: '#1976d2' }}/>
                            ) :
                            (
                              <TimerIcon style={{ color: '#f44336' }}/>
                            )
                          }
                        </IconButton>
                      </TableCell>
                      <TableCell>
                        <IconButton  onClick={e => props.deleteAction(tarefa.id)}>
                          <DeleteOutlineIcon style={{ color: '#3c3c3c' }}/>
                        </IconButton>
                      </TableCell>
                    </TableRow>
                  )
                })
                }
              </TableBody>
            </Table>
          </div>
        </PerfectScrollbar>
      </CardContent>
    </Card>
  );
};

TerefasTable.propTypes = {
  className: PropTypes.string,
  tarefas: PropTypes.array.isRequired
};

export default TerefasTable;
