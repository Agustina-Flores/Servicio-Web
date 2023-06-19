 
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';

const New = ({open,handleClickClose,data,onChange,handleSubmit}) => {
  
  const  {id,destino,country,vehiculo,marca,patente,fecha} = data
 
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
            <TextField id="destino" value={destino}  onChange={e=>onChange(e)}  placeholder='Ingrese nombre de la ciudad' label='Destino' variant='outlined' margin="dense" fullWidth autoFocus></TextField>
            <TextField id="country" value={country} onChange={e=>onChange(e)}  placeholder='Ingrese country' label='Country' variant='outlined' margin="dense" fullWidth></TextField>
             <TextField id="vehiculo" value={vehiculo}  onChange={e=>onChange(e)}  placeholder='Ingrese vehiculo' label='Vehiculo' variant='outlined' margin="dense" fullWidth></TextField>
             <TextField id="marca" value={marca}  onChange={e=>onChange(e)}  placeholder='Ingrese Marca' label='Marca' variant='outlined' margin="dense" fullWidth></TextField>
             <TextField id="patente" value={patente}  onChange={e=>onChange(e)}  placeholder='Ingrese Patente' label='Patente' variant='outlined' margin="dense" fullWidth></TextField>
            <TextField id="fecha" value={fecha} onChange={e=>onChange(e)}  placeholder='Ingrese fecha: MM-DD-YYYY' label='Fecha' variant='outlined' margin="dense" fullWidth></TextField>
            
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