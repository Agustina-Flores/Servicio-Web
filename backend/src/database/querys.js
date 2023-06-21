import { getViajeById } from "../controllers/viajes.controllers";

export const queries =
{
    getAllViajes : 'SELECT * FROM ViajesProgramados',
    addViaje: 
    'INSERT INTO ViajesProgramados (destino,vehiculo,fecha,country,marca,patente) VALUES (@destino,@vehiculo,@fecha,@country,@marca,@patente)',
    getViajeById: 'SELECT * FROM ViajesProgramados Where id = @id',
    deleteViaje: 'DELETE From ViajesProgramados Where id = @id',
    updateViaje: 'UPDATE ViajesProgramados SET destino = @destino, vehiculo = @vehiculo, fecha=@fecha, country=@country,marca=@marca,patente=@patente WHERE id=@id',

}