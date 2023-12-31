import {getConnection,sql,queries} from '../database/index.mjs'
 
//
//Select
export const getViajes = async(req,res) =>{

    try{
        
    const pool = await getConnection();
    const result = await pool.request().query(queries.getAllViajes);
    

    res.json(result.recordset)
   
    }catch(error){
        res.status(500)
       
      //res.sense(error.message)
    }
     

};

//Insert
export const createViajes = async (req,res) =>{

    const {destino,vehiculo,fecha,country,marca,patente} = req.body
    if(destino == null || vehiculo == null || fecha == null || country == null|| marca == null|| patente == null)
    {
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
     try{
        const pool = await getConnection();

        const result = await pool 
        .request()
        .input("destino" , sql.VarChar, destino)
        .input("vehiculo" , sql.VarChar, vehiculo)
        .input("fecha", sql.Date, fecha)
        .input("country", sql.VarChar, country)
        .input("marca", sql.VarChar, marca)
        .input("patente", sql.VarChar, patente)
        .query(queries.addViaje)
    
        console.log(result);
    
        res.json({destino,vehiculo,fecha,country,marca,patente});
     }catch(error)
     {
        res.status(500)
        res.sense(error.message)
     }
};

 
//Select by id
 export const getViajeById = async (req,res) =>{
    const {id} = req.params

    try{
        const pool = await getConnection()
        const result=await pool.request().input("id" , id)
        .query(queries.getViajeById);
         console.log(result)
        res.send(result.recordset[0]);

    }catch(error)
    {
        res.status(500)
        res.sense(error.message)
    }
  

 };

 //Delete
 export const deleteViaje = async (req,res) =>{
    const {id} = req.params

    try{
        const pool = await getConnection()
        const result = await pool.request().input("id", id)
        .query(queries.deleteViaje);
        console.log(result)
        res.sendStatus(204); 
    }
     catch(error)
     {
        res.status(500)
        res.sense(error.message)
     }
 };

 //Update
 export const updateViaje = async(req,res) =>
 {
    const {id} = req.params

    const {destino,vehiculo,fecha,country,marca,patente} = req.body

    if(destino == null || vehiculo == null || fecha == null|| country == null|| marca == null|| patente == null)
    {
        return res.status(400).json({msg: 'Por favor llena todos los campos'})
    }
    try{
        const pool= await getConnection()
        await pool.request()
        .input("destino" , sql.VarChar, destino)
        .input("vehiculo" , sql.VarChar, vehiculo)
        .input("fecha", sql.Date, fecha)
        .input("country", sql.VarChar, country)
        .input("marca", sql.VarChar, marca)
        .input("patente", sql.VarChar, patente)
        .input("id", sql.Int, id)
        .query(queries.updateViaje);
        res.json({destino,vehiculo,fecha,country,marca,patente});
    }
    catch(error)
    {
        res.status(500)
        res.sense(error.message)
    }
    

 };