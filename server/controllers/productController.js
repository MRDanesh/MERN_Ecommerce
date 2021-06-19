import express from 'express';

import Product from '../models/productModel.js';

export const getProducts = async (req, res, next) => {
    try{
        const products = await Product.find({});
        res.send(products);
    } catch(err) {
        next(err);
    }
};

export const getProductById = async(req, res, next) => {
    try{
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        next(err);
    }
};