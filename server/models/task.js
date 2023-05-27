const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String, 
        required: [true, 'name is a required field'], 
        maxlength: [20, 'Name cannot be more than 20 characters'], 
        trim: true
    }, 
    completed: {
        type: Boolean, 
        default: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)