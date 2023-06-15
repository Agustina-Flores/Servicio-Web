import { getViajeById } from "../controllers/viajes.controllers";

export const queries =
{
    getAllViajes : 'SELECT * FROM ViajesProgramados',
    addViaje: 
    'INSERT INTO ViajesProgramados (destino,vehiculo,fecha) VALUES (@destino,@vehiculo,@fecha)',
    getViajeById: 'SELECT * FROM ViajesProgramados Where id = @id',
    deleteViaje: 'DELETE From ViajesProgramados Where id = @id',
    updateViaje: 'UPDATE ViajesProgramados SET destino = @destino, vehiculo = @vehiculo, fecha=@fecha WHERE id=@id',

}