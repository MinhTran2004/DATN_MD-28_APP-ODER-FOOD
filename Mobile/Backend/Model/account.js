const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    username: {type:String, required: true},
    account: {type:String, required: true},
    password: {type:String, required: true},
    image: {type:String, required: true},
    phone: {type:String, required: true},
    role: {type:String, required: true},
    dateCreate: {type:String, required: true},
    status: {type:String, required: true},
})

const Account = mongoose.model('Account', AccountSchema);

module.exports = Account;