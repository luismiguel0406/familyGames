'use strict'
const mongoose = require('mongoose');

const {Schema} = mongoose;

const display_schema = new Schema({
    
    inches:String,
    resolution:String,
    model:String,
    color:String

});

module.exports = mongoose.model('display',display_schema,'display');