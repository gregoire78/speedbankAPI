var express = require('express');  
var router = express.Router(); 
var Users = require('../controllers/Accounts');
var Jwt = require('jsonwebtoken');

var tokenAuth = function(req, res, next){

    var token = req.body.token || req.query.token || req.headers['x-access-token'] || req.headers['Authorization'] || req.get('authorization').split('Bearer ')[1];
    
    if (token) {
        Jwt.verify(token, 'batman', function(err, decoded) {      
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });    
            } else {
                req.decoded = decoded;    
                next();
            }
        });
    } else {
        return res.status(403).send({ 
            success: false, 
            message: 'No token provided.' 
        });
    }
}

router.post('/create', tokenAuth, Accounts.create);
router.put('/add_mouvement', tokenAuth, Accounts.push);

module.exports = router;