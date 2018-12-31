var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Gsection = new Schema({
    title: {
        type: String
    },
    user: {
        type: String
    },
    content: {
        type: String
    },
    version: {
        type: String
    },
    created: {
        type: Date
    },
    updated: {
        type: Date
    },
    category: {
        type: String
    },
    target: {
        type: String
    },
    author_id: {
        type: String
    },
    author_name: {
        type: String
    },
    language: {
        type: String
    },
    currency: {
        type: String
    },
    price: {
        type: Number
    },
    emergin: {
        type: Number
    },
    access: {
        type: Number
    },
    sold: {
        type: Number
    }
});


module.exports =  mongoose.model('Gsection', Gsection);