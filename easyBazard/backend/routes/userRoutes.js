import express from 'express'
import {
    createUser,
    loginUser,
    logoutCurrentUser,
    getAllUsers,
    getCurrentUserProfile,
    updateCurrentUserProfile,
    deleteById,
    getUserById,
    updateUserById
    } from '../controllers/userController.js'

import { authenticate, authorizeAdmin } from '../middleware/authMiddleware.js'

const router = express.Router()
router
.route('/') 
.post(createUser)
.get(authenticate, authorizeAdmin, getAllUsers)

router.post("/auth", loginUser)
router.post("/logout", logoutCurrentUser)

router
.route('/profile')
.get(authenticate, getCurrentUserProfile)
.put(authenticate, updateCurrentUserProfile)

router
.route('/:id')
.get(authenticate, authorizeAdmin, getUserById)
.put(authenticate, authorizeAdmin, updateUserById)
.delete(authenticate, authorizeAdmin, deleteById)


export default router