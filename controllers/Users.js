require('../models/Users');
var mongoose = require('mongoose'),
    User = mongoose.model('User');

var bcrypt = require('bcrypt');
var Jwt = require('jsonwebtoken');

module.exports = Users = {
    
    create: function (req, res, next) {
        
        bcrypt.hash(req.body.password, 10).then(function (hash) {

            var userModel = new User();

            userModel.firstname = req.body.firstname;
            userModel.lastname = req.body.lastname;
            userModel.email = req.body.email;
            userModel.password = hash;
            userModel.address.city = req.body.city;
            userModel.address.street = req.body.street;
            userModel.address.postal_code = req.body.postal_code;
            userModel.isdn = req.body.isdn;

            userModel.save(function (err) {
                if (err) return next(err);
                res.json('Successfully register a new user');
            });
        });
    },

    get: function (req, res, next) {
        User.findById(req.params.id, function (err, user) {
            if (!user) {
                return res.status(406).json('id érroné ou manquant');
            }

            var userModel = {
                id: user._id,
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: user.password,
                isdn: user.isdn,
                address: {
                    city: user.address.city,
                    street: user.address.street,
                    postal_code: user.address.postal_code
                }
            };
            res.json(userModel);
        })

    },

    update: function (req, res, next) {
        var id = req.params.id;

        if (Object.keys(req.body).length === 0) {
            return res.status(422).json('rien a mettre à jour')
        }

        User.findByIdAndUpdate(id, req.body, {new: true}, function (err, user) {
            res.json({'updated': user})
        });
    },

    authenticate: function (req, res, next) {
        User.findOne({email: req.body.email}, function(err, user){
            
            if (err) return handleError(err);

            bcrypt.compare(req.body.password, user.password).then(function(data) {
                if(data === true){
                    var tokenData = {
	                    email: user.email,
	                    id: user._id
	                };
                    var result = Jwt.sign(tokenData, 'batman');
                    
                    /*User.findByIdAndUpdate(user._id, {token: result}, {new: true}, function (err, result) {
                        return res.json({'updated': result})
                    });*/
                    return res.json({success: true, token: result})
                } else {
                    return res.json({success: false})
                }
            });
        })
    }
};