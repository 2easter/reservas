var express = require('express');
var mongoose = require('mongoose');

//inicializar variables

var app = express();

//Rutas
app.get('/', (req, res, next) => {
    res.status(200).json({
        ok: true,
        mensaje: 'Petición realizada correctamente prueba'
    });

});


// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/reservas', ( err, res) => {
    if (err) throw err;
    console.log('Base de datos: ','online');

});

//escuchar peticiones

app.listen(3001, () => {
    console.log('Express server corriendo en el puerto 30001 online');
});
