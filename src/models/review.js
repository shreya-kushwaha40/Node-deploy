const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    bookId: mongoose.Schema.Types.ObjectId,
    customerId : Number,
    review : String,
    rating: Number,
})

module.exports = mongoose.model('Review', reviewSchema);
