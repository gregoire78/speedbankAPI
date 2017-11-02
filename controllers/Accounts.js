require('../models/Accounts');
var mongoose = require('mongoose'),
    Account = mongoose.model('Account');

var bcrypt = require('bcrypt');

module.exports = Accounts = {
    create: function(req, res, next){

        var accountModel = new Account();
        
        accountModel.name = req.body.name;
        accountModel.user = req.decoded.id;

        accountModel.save(function (err) {
            if (err) return next(err);
            res.json(accountModel);
        });
    },

    push: function(req, res, next){
        console.log(req.body.id)
        Account.findOneAndUpdate({_id:req.body.id, user: req.decoded.id }, { $push : { mouvement: { price: req.body.price, description: req.body.description } } }, {new: true}, function (err, result) {
            return res.json({'updated': result})
        });
    }
};