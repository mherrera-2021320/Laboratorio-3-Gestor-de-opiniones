const jwt = require('jsonwebtoken');

const generarJWT = (uid, name) => {
    return new Promise((resolve, reject) => {
        const payload = { uid, name };      
        jwt.sign(payload, process.env.SECRET_JWT_SED, {
            expiresIn: '2h'                     //Es SED, no 'SEED'
        }, (err, token) => {

            if (err) {
                console.log(err);
                reject('No se pudo generar el token');
            } else { // No estaba el Else
                resolve(token);
            }
        });
    });
}

module.exports = {
    generarJWT
}