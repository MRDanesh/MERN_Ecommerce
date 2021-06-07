import express from 'express';
import products from '../data/products.js';

import Product from '../models/productModel.js';

const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const products = await Product.find({});
        res.send(products);
    } catch(err) {
        res.status(404).send({error: err.message});
    }
});

router.get('/:id', async(req, res, next) => {
    try{
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        next(err);
    }
});

export default router;