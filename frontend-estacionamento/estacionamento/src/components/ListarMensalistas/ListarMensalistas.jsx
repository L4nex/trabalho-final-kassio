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
import MiniDrawer from "../MenuBar/MiniDrawer";
import "./style.css";

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
  const [mensalistas, setMensalistas] = useState([]);

  function handleEditaMensalistas(id) {
    window.location.assign("http://localhost:3000/cadastrarMensalistas?id=" + id);
  }
  useEffect(() => {
    api.get("mensalistas", {}).then((response) => {
      setMensalistas(response.data);
    });
  }, []);

  return (
    <section className="class_listaUsuario">
      <MiniDrawer />
      <TableContainer class="tabela" component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <StyledTableRow>
              <StyledTableCell align="center">Nome</StyledTableCell>
              <StyledTableCell align="center">CPF</StyledTableCell>
              <StyledTableCell align="center">Data de entrada</StyledTableCell>
              <StyledTableCell align="center"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {mensalistas.map((mensalista, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">{mensalista.nome}</StyledTableCell>
                <StyledTableCell align="center">
                  {mensalista.cpf}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {mensalista.data_entrada}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleEditaMensalistas(mensalista.id)}
                  >
                    Editar
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </section>
  );
}

export default Usuario;
