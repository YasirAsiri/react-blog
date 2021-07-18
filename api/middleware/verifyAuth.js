
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {

    const authError = { error: true, message: 'Authorization Failed!'}
    const authHeader = req.headers.authorization;
    try {

        if (authHeader) {
            const token = authHeader.split(' ')[1];
            jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
                if(err) {
                    authError.message = 'Auth token is not valid!'
                    return res.status(403).json(authError)
                }
    
                req.user = user;
                next();
            });
    
        } else {
            authError.message = 'You must pass an authorization token!'
            res.status(403).json(authError);
        }
        
    } catch (err) {
        res.status(500).json(err);

    }
};