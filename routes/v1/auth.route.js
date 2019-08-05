import express from 'express'
import { register, login } from '../../controllers/v1/auth.controller'
import { upload } from '../../middlewares/image.middleware'

const router = express.Router()

router.route('/register')
  .post(
    upload.single('profileImg'),
    register
  )

router.route('/login')
  .post(
    login
  )

export default router
