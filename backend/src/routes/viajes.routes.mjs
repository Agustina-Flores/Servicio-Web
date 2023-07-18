import {Router} from 'express'
import {createViajes, deleteViaje, getViajeById, getViajes, updateViaje} from '../controllers/viajes.controllers.mjs'

const router = Router()

router.get('/viajes', getViajes)

router.get('/viajes/:id', getViajeById)

router.post('/viajes', createViajes)

router.put('/viajes/:id', updateViaje)

router.delete('/viajes/:id', deleteViaje)

 

export default router;
