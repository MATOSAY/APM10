import React, { useState, useEffect } from 'react';
import {
  FormControl,
  InputLabel,
  Input,
  FormHelperText,
  MenuItem,
  Select,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Button,
} from '@mui/material';

// Declaração do componente CriarTarefa
const CriarTarefa = ({ handleClose, tarefas, setTarefas }) => {
  const [idTarefa, setIdTarefa] = useState();
  const [tituloTarefa, setTituloTarefa] = useState('');
  const [descricaoTarefa, setDescricaoTarefa] = useState('');
  const [inicioTarefa, setInicioTarefa] = useState('');
  const [fimTarefa, setFimTarefa] = useState('');
  const [recursoTarefa, setRecursoTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');

  useEffect(() => {
    let proximoId = Math.max(...tarefas.map((tarefa) => tarefa.idTarefa), 0) + 1;
    setIdTarefa(proximoId);
  }, [tarefas]);

  const handleRecurso = (event) => setRecursoTarefa(event.target.value);
  const handleStatus = (event) => setStatusTarefa(event.target.value);

  const handleSalvar = () => {
    setTarefas((prevTarefas) => [
      ...prevTarefas,
      {
        idTarefa,
        tituloTarefa,
        descricaoTarefa,
        inicioTarefa,
        fimTarefa,
        recursoTarefa,
        statusTarefa,
      },
    ]);
    handleClose();
  };

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Card sx={style}>
        <CardHeader title="Tarefas" subheader="Cadastro de Tarefas" />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_titulo">Título</InputLabel>
                <Input
                  id="tarefa_titulo"
                  value={tituloTarefa}
                  onChange={(e) => setTituloTarefa(e.target.value)}
                  aria-describedby="tarefa_titulo_helper_text"
                />
                <FormHelperText id="tarefa_titulo_helper_text">
                  Insira o título da tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_descricao">Descrição</InputLabel>
                <Input
                  id="tarefa_descricao"
                  value={descricaoTarefa}
                  onChange={(e) => setDescricaoTarefa(e.target.value)}
                  aria-describedby="tarefa_descricao_helper_text"
                />
                <FormHelperText id="tarefa_descricao_helper_text">
                  Insira uma descrição detalhada.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_inicio">Início</InputLabel>
                <Input
                  id="tarefa_inicio"
                  type="date"
                  value={inicioTarefa}
                  onChange={(e) => setInicioTarefa(e.target.value)}
                  aria-describedby="tarefa_inicio_helper_text"
                />
                <FormHelperText id="tarefa_inicio_helper_text">
                  Data de início da tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_fim">Fim</InputLabel>
                <Input
                  id="tarefa_fim"
                  type="date"
                  value={fimTarefa}
                  onChange={(e) => setFimTarefa(e.target.value)}
                  aria-describedby="tarefa_fim_helper_text"
                />
                <FormHelperText id="tarefa_fim_helper_text">
                  Data de término da tarefa.
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_recurso">Recurso</InputLabel>
                <Select
                  id="tarefa_recurso"
                  value={recursoTarefa}
                  onChange={handleRecurso}
                >
                  <MenuItem value="Recurso 1">Recurso 1</MenuItem>
                  <MenuItem value="Recurso 2">Recurso 2</MenuItem>
                  <MenuItem value="Recurso 3">Recurso 3</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth>
                <InputLabel htmlFor="tarefa_status">Status</InputLabel>
                <Select
                  id="tarefa_status"
                  value={statusTarefa}
                  onChange={handleStatus}
                >
                  <MenuItem value="Aguardando">Aguardando</MenuItem>
                  <MenuItem value="Em Andamento">Em Andamento</MenuItem>
                  <MenuItem value="Concluída">Concluída</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid container justifyContent="flex-end" spacing={2} mt={2}>
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSalvar}
                >
                  Salvar
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" onClick={handleClose}>
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '100%',
  maxWidth: '600px',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 3,
};

export default CriarTarefa;
