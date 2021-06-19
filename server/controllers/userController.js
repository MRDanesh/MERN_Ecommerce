import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import generateToken from '../utils/generateToken.js'

// Description: Auth user & get token
// Route: POST /api/users/login
// Acess: public

export const authUser = async (req, res, next) => {
    const {email, password} = req.body;
    
    const user = await User.findOne({email});
    
    if (user) {
        // Check Password
        const hashedPass = user.password;
        const isPasswordCorrect = bcrypt.compareSync(password, hashedPass);
        if (isPasswordCorrect) {
            res.send({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                token: generateToken(user._id)
            })
        }
        res.status(401);
        const err =  new Error ('Invalid Password!');
        next(err);
    } else {
        const err =  new Error ('User not Found!');
        next(err);
    }
};

// Description: Get current user profile in online shop
// Route: GET /api/users/profile
// Acess: Private

export const getUserProfile = async (req, res, next) => {
    const user = await User.findById(req.user._id);
    if (user) {
        res.send({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404);
        const error = new Error ('User Not Found!')
        next (error);
    }
};

