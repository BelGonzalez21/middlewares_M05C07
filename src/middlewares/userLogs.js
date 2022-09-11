const fs = require('fs');
const path =require('path');
//ingreso del usuario a la ruta:

const userLogs = (req, res, next) => {
    fs.appendFileSync(path.resolve(__dirname, '..', 'logs', 'userLogs.txt'),
    "el usuario ingreso a la ruta " + req.url + '\n' ) //esto aparece en el txt usando appendFileSync
    next() //sin next, no se puede acceder y se queda pensando
}

module.exports = userLogs;