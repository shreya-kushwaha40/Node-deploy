const express = require('express');
const router = express.Router();
const Order = require('../models/order');
const Customer = require('../models/customer');
const auth = require('../middlewares/auth');
const role = require('../middlewares/role');


router.get('/:customerId', [auth, role(['admin', 'customer'])], async(req, res) =>{
    const {page = 1, limit = 10, sort = 'createdAt', order = 'DESC'} = req.query;
    try{
        const orders = await Order.findAndCountAll({
            where: {customerId: req.params.customerId}, 
            include:Customer,
            limit: parseInt(limit),
            offset: (page - 1) * limit,
            order: [[sort, order]],
        });
       
        res.json({
            totalItems: orders.count,
            totalPages: Math.ceil(orders.count/ limit),
            currentPage: parseInt(page),
            data: orders.rows,
        });
    }catch(err){
        res.status(500).send(err.message);
    }
})

module.exports = router;
