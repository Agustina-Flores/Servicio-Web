 import express from 'express'
import config from './config';
import routes from './routes/viajes.routes'
import cors from 'cors'

 const app = express();
 
 //settings
 app.set('port', config.port || 3000)

//middlewares
app.use(cors(
    //origin:'http://localhost:5173'
));
app.use(express.json())
app.use(express.urlencoded({extended:false}))

 app.use(routes)

 export default app;