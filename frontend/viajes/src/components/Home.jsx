import React from "react";
import '../App.css'
import {useEffect,useState,useRef } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { getViajeRequest, getNewViajeRequest, createViajeRequest, deleteViajeRequest,updateViajeRequest } from "../api/viajes.api";
import { Grid, Button } from '@mui/material'
import New from './Dialog';  
 import Weather from './Weather';

function Home()
{
     
    const initialValue = {id:"",destino: "", country: "", vehiculo: "",marca:"",patente:"", fecha: ""}
    const gridRef = useRef();
    const [viajes, setViajes] = useState([])
    const [open, setOpen] =  React.useState(false);
    const [data,setData] = useState(initialValue);
     
    
 

    const handleClickOpen = () =>{
        setOpen(true);
    }

   const handleClickClose = () =>
   {
        setOpen(false)
        setData(initialValue)
   }

   const onChange= (e) =>
   {
        const {value,id} = e.target
 
    setData({...data,[id]:value})
   }
 

   //get viajes
  const loadViajes = async () =>
  {
    const response=  await getViajeRequest()
          setViajes(response.data)
  }

   //get viajes
    useEffect(() =>{ 
            loadViajes()
  
    },[])
   
    //create viaje
 
    const handleSubmit = async (data) =>
    {
 
      try 
      {
        if(data.id)
        {
          const confirm = window.confirm("Estas seguro que quieres modificar esta fila ?")
          if(confirm)
          {
            const responseUpdate = await getNewViajeRequest(data.id);
            console.log("update" , responseUpdate.data)
            handleClickClose()
            setData({
              id:responseUpdate.id,
              destino: responseUpdate.destino,
              vehiculo:responseUpdate.vehiculo,
              fecha:responseUpdate.fecha
            });
            console.log("data nueva" , data)
            const respuestaCambiada = updateViajeRequest(data.id,data)
         /////
            console.log("put" , respuestaCambiada);
       
            loadViajes()
          }
          
        }
        else
        {

             const response = await createViajeRequest(data)
            console.log("aca", response.data)
            handleClickClose()
            loadViajes();
            setData(initialValue)
            
           }
              
         } catch(err)
          {
          
            console.log(err);
          
          }
       
        
          
         
    } 

    const columnDefs= [
        // {
       //   field: 'id ',
       //  },
        {
          field:'destino',
          cellStyle: {fontSize: '30px', width: 250 }, 
         
        },
        {
          field: 'vehiculo', 
          cellStyle: {fontSize: '30px', width: 250 }
        },
        {
         
          field: 'fecha',  
          cellStyle: {fontSize: '30px' , width: 250 } 
        },
        {
          field: 'Acciones' ,  cellRenderer:(props) =>
           <div>
              <Button variant="outlined" onClick={() => handleUpdate(props.data)} color="primary" >Reprogramar</Button>
              <Button  variant="outlined" color="secondary" onClick={() => handleDelete(props.data.id)}>Eliminar</Button>
               
          </div>
      
        }
      ] 

      
      const handleUpdate = async (dataUpdate) =>
      {

            setData(dataUpdate)
            console.log("datos" , dataUpdate)
            handleClickOpen(true)
      }
  
    //eliminar viaje
    const handleDelete = async (id) =>
    {
        
        const confirma = window.confirm("Seguro que quieres eliminar esta fila ?", id)
        //console.log(id)
        if(confirma)
        {
            const response = await deleteViajeRequest(id)
            console.log(response.data)
            loadViajes()
        }
    }
    


      const defaultColDef = {
 
        sortable: true,
        flex: 1, filter: true,
        floatingFilter: true
      }
    return(
   
        <div  className="App"  > 
        <div className="grid ag-theme-alpine-dark"
        style={{ height: 600, width: 1400  }}>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Weather></Weather>
        <h1 style={{color: "thistle", fontFamily: "Arial, Helvetica, sans-serif" , padding: "20px", fontSize:"60px"}}>Viajes Programados En los proximos 10 dia</h1>
        <Grid align="center">
        <Button style={{ fontSize: '25px', fontFamily: "Arial, Helvetica, sans-serif" }} size="large" variant="contained" color="primary" onClick={handleClickOpen}>Nuevo Viaje</Button>
      </Grid> 
       
        <br></br>
         
        <AgGridReact 
         style={{mx:"auto"}}
         rowData={viajes}
          ref={gridRef}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
        />
       
      
        </div>
         
      <New open={open} handleClickClose={handleClickClose} data={data} onChange={onChange} handleSubmit={handleSubmit}  ></New>
      
        </div>
     
         
    )
}

export default Home;