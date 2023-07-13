import { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import axios from "axios";

const New = ({ open, handleClickClose, data, onChange, handleSubmit }) => {
  const { id, destino, vehiculo, fecha, country, marca, patente } = data;

  const [error, setError] = useState({});

  async function searchLocation() {
    try {
      await axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${data.destino}&appid=ed9a274bc3da6f55f4cef9ade3e0f4b1&units=metric`
        )
        .then((response) => {
          console.log("desde data ", response.data);
          console.log("desde main", response.data.weather[0].main);

          //Clouds
          if (
            response.data.weather[0].main.includes("light rain") ||
            response.data.weather[0].main.includes("Rain")
          ) {
            console.log("es lluvioso");
            setError(Validation(response.data.weather[0].main));
          } else {
            console.log("NO es lluvioso");
            setError("");
          }
        });
    } catch (err) {
      console.log(err);
    }
  }
  
  const Validation = (data) => {
    console.log("data valida", data);
    let errors = {};
    if (data === "Rain" || data === "light rain") {
      errors.destino =
        "❌ No es posible realizar este viaje, por probabilidad de lluvia. Porfavor elija otro destino";
    }

    return errors;
  };
  return (
    <div>
      <Dialog
        sx={{ width: "100%", height: "100%" }}
        open={open}
        onClose={handleClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle id="alert-dialog-title">
          {id ? "Reprogramar" : "Crear Nuevo Destino"}
        </DialogTitle>
        <DialogContent>
          <form>
            <TextField
              id="destino"
              value={destino || ""}
              name="destino"
              onChange={(e) => onChange(e)}
              onKeyPress={(e) => searchLocation(e)}
              placeholder="Ingrese nombre de la ciudad"
              label="Destino"
              variant="outlined"
              margin="dense"
              fullWidth
              autoFocus
            ></TextField>
            {error.destino && <span className="error">{error.destino}</span>}
            <TextField
              id="country"
              value={country}
              name="country"
              onChange={(e) => onChange(e)}
              placeholder="Ingrese country"
              label="Country"
              variant="outlined"
              margin="dense"
              fullWidth
            ></TextField>
            <TextField
              id="vehiculo"
              value={vehiculo}
              name="vehiculo"
              onChange={(e) => onChange(e)}
              placeholder="Ingrese vehiculo"
              label="Vehiculo"
              variant="outlined"
              margin="dense"
              fullWidth
            ></TextField>
            <TextField
              id="marca"
              value={marca}
              name="marca"
              onChange={(e) => onChange(e)}
              placeholder="Ingrese Marca"
              label="Marca"
              variant="outlined"
              margin="dense"
              fullWidth
            ></TextField>
            <TextField
              id="patente"
              value={patente}
              name="patente"
              onChange={(e) => onChange(e)}
              placeholder="Ingrese Patente"
              label="Patente"
              variant="outlined"
              margin="dense"
              fullWidth
            ></TextField>
            <TextField
              id="fecha"
              value={fecha}
              name="fecha"
              onChange={(e) => onChange(e)}
              placeholder="Ingrese fecha: MM-DD-YYYY"
              label="Fecha"
              variant="outlined"
              margin="dense"
              fullWidth
            ></TextField>
          </form>
        </DialogContent>
        <DialogActions onClick={handleClickClose}>
          <Button color="primary" variant="contained">
            Cancelar
          </Button>
          <Button
            onClick={() => handleSubmit(data)}
            color="secondary"
            variant="contained"
          >
            {id ? "Reprogramar" : "Guardar"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default New;
