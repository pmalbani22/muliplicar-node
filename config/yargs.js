//creo una constante opt para guardar las definiciones  de yargs
const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: `l`,
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla multiplicar', opt)
    .command('crear', 'Crea un archivo txt', opt)
    .help()
    .argv;

module.exports = {
    argv
}