const admins = ['greta', 'ada', 'vim', 'tim'];
const accessAdmin = (req, res, next) => {
    if(!req.query.user){ //si no coincide el admin, te manda al login y evita que se rompa.
        return res.redirect('/login')
    }
    if(admins.includes(req.query.user.toLowerCase())){ //si es true, entra al admin, si es false entra a noEntry 
        next()
    }
    return res.redirect('/no-entry')
}
module.exports = accessAdmin