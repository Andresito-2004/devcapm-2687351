//dependencia commontjs
const express  = require('express');
//const dotenv = require('dontev')
const colors = require('colors')
// dependecias de las rutas
const bootcampRoutes = require('./routes/bootcampRoutes.js')
// dependecia de la conexion a la base de datos
const conectDB = require('./config/db.js')
 conectDB()

//crear objeto app
const app = express();

//Dependencia para recibir datos JSON
app.use(express.json())

app.use('/api/v1/devcamp/bootcamps',bootcampRoutes)



//PRUEBA DE URL DEL SERVIDOR
app.get('/prueba',function(request, response){
    response.send("Hello Word");
});

//                              URI COURSES

//LISTAR TODOS
app.get('/Api/v1/devcamp/courses',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": "mostrar todos los Courses"
    })
});
//LISTAR ID
app.get('/Api/v1/devcamp/courses/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Seleccionado el course con id: ${request.params.id}`
    })
});

//ENVIAR DATO
app.post('/Api/v1/devcamp/courses',(request,response)=>{
    response
    .status(201)
    .json({
        "sucess": true,
        "msg": "crear course"
    })
});
//ACTUALIZAR DATO POR ID 
app.put('/Api/v1/devcamp/courses/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Actualizando el course con id: ${request.params.id}`
    })
});
//ELIMINAR DATO POR ID 
app.delete('/Api/v1/devcamp/courses/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `eliminado el course con id: ${request.params.id}`
    })
});


//                              URI REVIEWS

//LISTAR TODOS
app.get('/Api/v1/devcamp/reviews',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": "mostrar todos los reviews"
    })
});
//LISTAR ID
app.get('/Api/v1/devcamp/reviews/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Seleccionado el review con id: ${request.params.id}`
    })
});

//ENVIAR DATO
app.post('/Api/v1/devcamp/reviews',(request,response)=>{
    response
    .status(201)
    .json({
        "sucess": true,
        "msg": "crear review"
    })
});
//ACTUALIZAR DATO POR ID 
app.put('/Api/v1/devcamp/reviews/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Actualizando el review con id: ${request.params.id}`
    })
});
//ELIMINAR DATO POR ID 
app.delete('/Api/v1/devcamp/reviews/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `eliminado el reviews con id: ${request.params.id}`
    })
});



//                              URI USERS

//LISTAR TODOS
app.get('/Api/v1/devcamp/users',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": "mostrar todos los users"
    })
});
//LISTAR ID
app.get('/Api/v1/devcamp/users/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Seleccionado el user con id: ${request.params.id}`
    })
});

//ENVIAR DATO
app.post('/Api/v1/devcamp/users',(request,response)=>{
    response
    .status(201)
    .json({
        "sucess": true,
        "msg": "crear user"
    })
});
//ACTUALIZAR DATO POR ID 
app.put('/Api/v1/devcamp/users/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `Actualizando el user con id: ${request.params.id}`
    })
});
//ELIMINAR DATO POR ID 
app.delete('/Api/v1/devcamp/users/:id',(request,response)=>{
    response
    .status(200)
    .json({
        "sucess": true,
        "msg": `eliminado el user con id: ${request.params.id}`
    })
});


//Establecer servidor 
const puerto = 4500
app.listen(puerto,
    console.log(`SERVIDOR ESCUCHANDO EL PUERTO: ${puerto}`.bgBlue.green))