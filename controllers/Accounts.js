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
                return res.json({success: true, 'updated': result})
            }
            return res.json({ success: false, message: 'Failed to save.' });
        });
    },

    getAccounts: function(req, res, next){
        Account.findOne({_id: req.params.id, user: req.decoded.id}, { "mouvements" : 0 },function(err, result){
            if(result){
                return res.json({success: true, 'updated': result})
            }
            return res.json({ success: false, message: 'Failed to get account.' });
        })
    }
};