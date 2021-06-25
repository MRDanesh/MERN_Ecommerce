import express from 'express';

import {protect} from '../middlewares/authMiddleware.js';
import {authUser, getUserProfile, registerUser, updateUserProfile} from '../controllers/userController.js';

const router = express.Router();

router.route('/login').post(authUser);
router.route('/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile);
router.route('/').post(registerUser);

export default router;

