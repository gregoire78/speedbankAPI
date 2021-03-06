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
        Account.findOneAndUpdate({ _id:req.body.id, user: req.decoded.id }, { $push : { mouvements: { price: req.body.price, description: req.body.description } } }, {new: true}, function (err, result) {
            if(result){
                return res.json(result)
            }
            return res.json({ success: false, message: 'Failed to save.' });
        });
    },

    getAccounts: function(req, res, next){
        var projection = (req.query.mvt == 'true') ? { mouvements: true , user: true, name: true} : {mouvements: false};
        Account.findOne({_id: req.params.id, user: req.decoded.id}, projection, function(err, result){
            if(result){
                return res.json(result)
            }
            return res.json({ success: false, message: 'Failed to get account.' });
        })
    },

    getAccountsForUser: function(req, res, next){
        Account.find({user: req.decoded.id}, function(err, result){
            if(result){
                return res.json(result)
            }
            return res.json({ success: false, message: 'Failed to get' });
        })
    }
};