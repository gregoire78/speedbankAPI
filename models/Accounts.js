var mongoose = require('mongoose'), // Nous appelons le module mongoose
Schema = mongoose.Schema; // Nous créons un schéma mongoose

var AccountSchema = new Schema({
    name:{type:String, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'users'},
    mouvement:[
        {price: {type: Number}, description: {type:String}}
    ]
});

var Account = mongoose.model('Account', AccountSchema, 'accounts');
exports.model = Account;