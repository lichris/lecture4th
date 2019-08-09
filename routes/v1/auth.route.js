import express from 'express'
import auth from '../../middlewares/auth.middleware'
import { register, login, changePassword } from '../../controllers/v1/auth.controller'
import { uploadUserProfile } from '../../middlewares/image.middleware'

const router = express.Router()

router.route('/register')
  .post(
    uploadUserProfile.single('profileImg'),
    register
  )

router.route('/login')
  .post(
    login
  )

router.route('/password')
  .post(
    auth,
    changePassword
  )

export default router
