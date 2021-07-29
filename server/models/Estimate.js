var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Estimate = new Schema({
    firstName: {
      type: String,
        default: ''
    },
    lastName: {
      type: String,
        default: ''
    },
    lastName: {
      type: String,
        default: ''
    },
    tel: {
      type: String,
        default: ''
    },
    checked: {
      type: [String],
        default: []
    },
    City: {
      type: String,
        default: ''
    },
    Address: {
      type: String,
        default: ''
    },
    Notes: {
      type: String,
        default: ''
    }
});



module.exports = mongoose.model('Estimate', Estimate);