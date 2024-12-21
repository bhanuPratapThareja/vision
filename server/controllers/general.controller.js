import User from "../models/user.schema.js"
import HttpError from "../utils/http-error.js"

export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.userId)
        if(!user) {
            return next(new HttpError('User Not Found!', 404))
        }
        res.status(200).json({ user })
    } catch (error) {
        next(error)
    }    
}

export const addUser = async (req, res, next) => {
    const user = req.body.user
    console.log('user: ', user)
    try {
        const newUser = await User.create(user)
        const { password, ...userInfo } = newUser.toObject({ getters: true })
        res.status(201).json({ message: 'User created successfully.', user: userInfo })
    } catch (error) { 
        next(error)
    }
}

export const deleteUser = async (req, res, next) => {
    const userId = req.params.userId
    console.log('userId to delete: ', userId)
    try {
        const user = await User.findByIdAndDelete(userId)
        res.status(200).json({ message: 'User deleted successfully.', user })
    } catch (error) {
        next(error)
    }
}