/*propios de Node require cont fs = require('fs');
externos a Node const express = require('express');
propias de nuestro proyecto  const nombre = require('./');*/

//{crearArchivo, listarTabla} usamos destructuracion
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

const colors = require('colors/safe');

//con el .argv solo solicita del módulo la parte del argv y no todo
const argv = require('./config/yargs').argv;


let comando = argv._[0]

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado:`, colors.green(`${archivo}`)))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}