import axios from 'axios';

//create viaje
export const createViajeRequest = async (viaje) =>
await axios.post("http://localhost:4000/viajes", viaje);

//get viajes
export const getViajeRequest = async () =>
await axios.get("http://localhost:4000/viajes");


//delete viaje
export const deleteViajeRequest = async (id) =>
await axios.delete(`http://localhost:4000/viajes/${id}`);
 

export const getNewViajeRequest = async (id) =>
await axios.get(`http://localhost:4000/viajes/${id}` )

//update viaje
export const updateViajeRequest = async(id,newData) =>
await axios.put(`http://localhost:4000/viajes/${id}`,newData)
 