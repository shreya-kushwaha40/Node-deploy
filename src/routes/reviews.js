const express = require('express');
const router = express.Router();
const Review = require('../models/review');
const Customer = require('../models/customer');
const mongoose = require('../config/mongoose');


router.get('/:bookId', async(req, res) =>{
    const {page = 1, limit = 10, sort = 'createdAt', order = 'DESC'} = req.query;
    try{
        const reviews = await review.find({bookId: req.params.bookId})
        .populate('customerId', 'name email')
        .limit(parseInt(limit))
        .skip((page - 1) * limit)
        .sort({[sort]: order.toLowerCase() === 'asc' ? 1 : -1})

        const totalItems = await Review.countDocuments({bookId: req.params.bookId})
        res.json({
            totalItems,
            totalPages: Math.ceil(totalItems/limit),
            currentPage: parseInt(page),
            data: reviews,
        });
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router