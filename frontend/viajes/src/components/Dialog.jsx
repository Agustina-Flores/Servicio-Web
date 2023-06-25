import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import axios from 'axios';

const New = ({open,handleClickClose,data,onChange,handleSubmit}) => {


  
  const  {id,destino,vehiculo,fecha,country,marca,patente} = data
   
  const [error,setError] = useState("")

  async function searchLocation () {
 
    try
    {
   //   const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${destino}&appid=ed9a274bc3da6f55f4cef9ade3e0f4b1&units=metric`;
      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${destino}&appid=ed9a274bc3da6f55f4cef9ade3e0f4b1&units=metric`).then((response) => {
 
      
        console.log("desde data " ,response.data)
         console.log("desde main" ,response.data.weather[0].main)
      
       if(response.data.weather[0].main.includes("light rain")  || response.data.weather[0].main.includes("Rain")){ 
        console.log("es lluvioso")
        setError("❌ No es posible realizar viaje a este destino, porque el clima es lluvioso");
       }

       else
       {
        console.log("NO es lluvioso")
       }        
       })
    }
    catch(err)
    {
      console.log(err)
    }
     
      
    }
  
  return (
    <div>
     
     <Dialog sx= {{ width: '100%' ,height:'100%'}}
          open={open}
          onClose={handleClickClose}
        aria-describedby="alert-dialog-slide-description"
      >
         <DialogTitle   id="alert-dialog-title">{id ? "Reprogramar" : "Crear Nuevo Destino"}
        </DialogTitle>
        <DialogContent>
        <form>
            <TextField id="destino" value={destino || ''}  onChange={e=>onChange(e)}  onKeyPress={(e) => searchLocation(e)} placeholder='Ingrese nombre de la ciudad' label='Destino' variant='outlined' margin="dense" fullWidth autoFocus></TextField>
            {error && <span className="error">{error}</span>}
            <TextField id="country" value={country } onChange={e=>onChange(e)}  placeholder='Ingrese country' label='Country' variant='outlined' margin="dense" fullWidth></TextField>
             <TextField id="vehiculo" value={vehiculo }  onChange={e=>onChange(e)}  placeholder='Ingrese vehiculo' label='Vehiculo' variant='outlined' margin="dense" fullWidth></TextField>
             <TextField id="marca" value={marca }  onChange={e=>onChange(e)}  placeholder='Ingrese Marca' label='Marca' variant='outlined' margin="dense" fullWidth></TextField>
             <TextField id="patente" value={patente }  onChange={e=>onChange(e)}  placeholder='Ingrese Patente' label='Patente' variant='outlined' margin="dense" fullWidth></TextField>
            <TextField id="fecha" value={fecha } onChange={e=>onChange(e)}  placeholder='Ingrese fecha: MM-DD-YYYY' label='Fecha' variant='outlined' margin="dense" fullWidth></TextField>
            
           </form>
        </DialogContent>
        <DialogActions onClick={handleClickClose}>
        <Button  color="primary" variant='contained'>Cancelar</Button>
          <Button onClick={() => handleSubmit(data)} color="secondary" variant='contained'>
          {id ? "Reprogramar" : "Guardar"}
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default New;