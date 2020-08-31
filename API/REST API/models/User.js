const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    username: {
        type: String,
        unique: true,
        required: true,

    },

    password: {
        type: String,
        required: true,
       
    },

    activities: [
        
        {
            type: 'ObjectId',
            ref: 'Activity'
        } 
        
    ]

});

module.exports = mongoose.model('User' , UserSchema);
