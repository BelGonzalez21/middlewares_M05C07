const router = require('express').Router();
const {index, contact, about, music, admin, login, noEntry} = require('../controllers/mainController');

const accessAdmin = require('../middlewares/accessAdmin');

router
    .get('/', index) // .get('/', userLogs, index) se puede colocar acá pero es mejor que se coloque en app directamente.
    .get('/contact', contact)
    .get('/about', about)
    .get('/music', music)
    .get('/admin', accessAdmin, admin) //cuando está acá se llama middleware de ruta
    .get('/login', login)
    .get('/no-entry', noEntry);
    
module.exports = router;