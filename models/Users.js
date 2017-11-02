var mongoose = require('mongoose'), // Nous appelons le module mongoose
Schema = mongoose.Schema; // Nous créons un schéma mongoose

var UserSchema = new Schema({
    lastname: {type: String, required: true},
    firstname: {type: String, required: true},
    email: {
        type: String,
        unique: true,
        lowercase: true, 
        required: true
    },
    password: {type: String, required: true},
    isdn: {type: String, required: true},
    address: {
        city: {type: String, required: true},
        street: {type: String, required: true},
        postal_code: {type: Number, required: true}
    }
});

var User = mongoose.model('User', UserSchema, 'users');
exports.model = User;