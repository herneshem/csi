
    //Instalar las dependencias necesarias express para conectar el sevidor con el servidor local. Y el mysql
    var express = require('express')
    const mysql = require('mysql')
    
    
    
    
    
    //-------------------ATRAPAR BASE DE DATOS------------
    
    const conection = mysql.createConnection({
        host:'localhost',
        user:'Hernest',
        password:'Titi',
        database:'csi'
    })
    conection.connect((error)=>{
        if(error) throw error
        console.log('conectado')
    })
    
    conection.query('SELECT * from presidiario',(error, rows)=>{
        console.log(rows)
    });
    


    //------------Mostrar toda la base de datos por el puerto 
    var app = express();
    app.get('/', function(req,res){
    res.send('Ruta')
    })
    
    app.get('/api/presidiario',(req,res)=>{
        conection.query('SELECT * from presidiario',(error, rows)=>{
            if(error){
                throw error;
            }else{
                res.send(rows)
            }
    });
    
    });
    const puerto =process.env.PORT || 3000;
    app.listen(puerto, function(){
        console.log(puerto)
    });

   
    