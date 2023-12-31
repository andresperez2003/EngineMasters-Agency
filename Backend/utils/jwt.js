const jwt = require('jsonwebtoken')


const generateToken = (user)=>{
    const expirationToken = new Date();

    //De la variable que contiene la fecha actual, se consulta la hora
    expirationToken.setHours(expirationToken.getHours()+1)

    //Generamos el payload del jwt
    const payload ={
        id: user._id,
        email:user.email,
        active:user.active,
        rol:user.rol,
        iat: Date.now(),
        exp: parseInt(expirationToken.getTime()/1000)
    }
    const access = jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY);
    return access;
};

const refreshToken = (user)=>{
    console.log(user);
    const expirationToken = new Date();
    //Actualizamos cada mes el token
    expirationToken.setMonth(expirationToken.getMonth()+1);
    //Generamos el payload del jwt
    const payload ={
        id: user._id,
        email:user.email,
        iat: Date.now(),
        exp: expirationToken.getTime()
    }
    const refresh =  jwt.sign(JSON.stringify(payload), process.env.SECRET_KEY);
    return refresh;
}
const decodeAccessToken = (token)=>{
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY)
    return verifyToken;
}

module.exports ={
    generateToken,
    refreshToken,
    decodeAccessToken
};