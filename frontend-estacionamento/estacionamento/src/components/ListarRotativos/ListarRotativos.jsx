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

function Rotativo() {
  const classes = useStyles();
  const [rotativos, setRotativos] = useState([]);

  async function handleDeleteRotativo(id) {
    try {
      await api.delete(`rotativo/${id}`, {});
      setRotativos(rotativos.filter((rotativo) => rotativo.id !== id));
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    api.get("rotativos", {}).then((response) => {
      setRotativos(response.data);
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
              <StyledTableCell class="font" align="center">
                Placa
              </StyledTableCell>
              <StyledTableCell class="font" align="center">
                Tipo de veiculo
              </StyledTableCell>
              <StyledTableCell class="font" align="center">
                
              </StyledTableCell>
              <StyledTableCell class="font" align="center"></StyledTableCell>
              <StyledTableCell class="font" align="center"></StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rotativos.map((rotativo, index) => (
              <StyledTableRow key={index}>
                <StyledTableCell align="center">
                  {rotativo.placa}
                </StyledTableCell>
                <StyledTableCell align="center">
                  {rotativo.tipo_veiculo}
                </StyledTableCell>
                <StyledTableCell align="center">
                  <Button
                    variant="contained"
                    onClick={() => handleDeleteRotativo(rotativo.id)}
                  >
                    Saiu
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

export default Rotativo;
