import React, { useState, useEffect } from "react";
import api from "../../service/api";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#7cfc00",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = makeStyles({
  table: {
    marginTop: 10,
    minWidth: 650,
  },
});

function Usuario() {
  const classes = useStyles();
  const [usuarios, setUsuarios] = useState([]);

  async function handleDeleteUsuario(id) {
    try {
      await api.delete(`usuario/${id}`, {});
      setUsuarios(usuarios.filter((usuario) => usuario.id !== id));
    } catch (e) {
      alert(e);
    }
  }

  function handleEditaUsuario(id) {
    window.location.assign("http://localhost:3000/cadastrarUsuarios?id=" + id);
  }
  useEffect(() => {
    api.get("usuarios", {}).then((response) => {
      console.log(response);
      setUsuarios(response.data);
    });
  }, []);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Nome</StyledTableCell>
              <StyledTableCell align="center">Email</StyledTableCell>
              <StyledTableCell align="center">Telefone</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((usuario, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{usuario.nome}</StyledTableCell>
                <StyledTableCell align="center">
                  {usuario.email}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {usuario.telefone}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleEditaUsuario(usuario.id)}
                  >
                    Editar
                  </Button>
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteUsuario(usuario.id)}
                  >
                    Excluir
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Usuario;
