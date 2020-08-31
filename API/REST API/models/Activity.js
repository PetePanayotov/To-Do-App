const mongoose = require('mongoose');

const ActivitySchema = new mongoose.Schema({

    activity: {
        type: String,
        required: true
    },

    location: {
        type: String,
        required: true
    },

    date: {
        type: String,
        required: true
    },

    time: {
        type: String,
        required: true
    },
    
});

module.exports = mongoose.model('Activity' , ActivitySchema);