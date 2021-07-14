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

};

// Description: Get orders by Id
// Route: GET /api/orders/:id
// Acess: Private

export const getOrderById = async (req, res, next) => {
    try{
        const order = await Order.findById(req.params.id);
        res.status(201).send(order);
    } catch (err) {
        res.status(400);
        const error = new Error ('There is no order!');
        next (error);
    }
};

// Description: Get orders by User
// Route: GET /api/orders/myorders
// Acess: Private

export const getMyOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({user: req.user._id});
        res.send(orders);
    } catch (err) {
        res.status(400);
        const error = new Error ('There is no order!');
        next (error);
    }
};

// Description: Update order to paid
// Route: PUT /api/orders/:id/pay
// Acess: Private

export const updateOrderToPaid = async (req, res, next) => {
    try{
        const order = await Order.findById(req.params.id);
        
        if(order) {
            order.isPaid = true;
            order.paidAt = Date.now();
            order.paymentResult = {
                id: req.body.id,
                status: req.body.status,
                update_time: req.body.update_time,
                email_adress: req.body.payer.email_address
            };

            const updatedOrder = await order.save();
            res.send(updatedOrder);
        }

    } catch(err) {
        res.status(400);
        const error = new Error ('There is no order!');
        next (error);
    }
}