import express from 'express'

import { getUser, addUser, deleteUser } from '../controllers/general.controller.js'

const router = express.Router()

router.get('/user/:userId', getUser)
router.post('/user', addUser)
router.delete('/user/:userId', deleteUser)

export default router