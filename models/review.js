const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    review: {
        type: String,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Review', reviewSchema);