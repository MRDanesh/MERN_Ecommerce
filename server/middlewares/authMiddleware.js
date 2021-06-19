import jwt from 'jsonwebtoken';
import User from '../models/userModel.js';

export const protect = async (req, res, next) => {
    if(req.headers.authorization){
        try{
            const token = req.headers.authorization.split(' ')[1];
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            req.user = await User.findById(decoded.id);
            next();
        } catch (err) {
            res.status(401);
            const error = new Error ('Not Authorize!');
            next(error);
        }
    }
    else {
        res.status(401);
        const error = new Error ('Not Authorize!, No token!');
        next(error);
    }
}