 import sql from 'mssql'
import config from '../config.mjs';

const dbSetting ={
    user : config.dbUser,
    password :config.dbPassword,
    server : config.dbServer,   
    database: config.dbDataBase,
     dialec:"mssql",
    instanceName: 'MSSQLSERVER',
    options:{
      //encrypt:true,
        trustServerCertificate:true,
    },
};
 
export async function getConnection()
{
   
    
    try{
        const pool = await sql.connect(dbSetting)

        return pool;
    }catch(error)
    {
        console.log(error)
    }
 
}

export { sql };
 
