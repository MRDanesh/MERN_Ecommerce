import Order from '../models/orderModel.js';

// Description: Create new order 
// Route: POST /api/orders
// Acess: Private

export const addOrderItems = async (req, res, next) => {
    const {
        orderItems, 
        shippingAddress, 
        paymentMethod, 
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice
    }  = req.body;

    if(orderItems) {
        try {
            const order = new Order({
                orderItems, 
                user: req.user._id,
                shippingAddress, 
                paymentMethod, 
                itemsPrice,
                taxPrice,
                shippingPrice,
                totalPrice
            });
            const createdOrder = await order.save();
            res.status(201).send(createdOrder);
        } catch (error) {
            res.status(400);
            const err = new Error ('Something went wrong in create order process!');
            next (err);
        }
        
    } else {
        res.status(400);
        const err = new Error ('No order items found!');
        next(err);
    }

}