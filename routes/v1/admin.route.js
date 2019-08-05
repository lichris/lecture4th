import express from 'express'
import auth from '../../middlewares/auth.middleware'
import admin from '../../middlewares/admin.middleware'
import { getUsers } from '../../controllers/v1/admin.controller'

const router = express.Router()

router.route('/users')
  .get(
    auth,
    admin,
    getUsers
  )

export default router
