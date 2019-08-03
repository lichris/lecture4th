import express from 'express'
import auth from '../../middlewares/auth.middleware'
import { login, check } from '../../controllers/v1/auth.controller'

const router = express.Router()

router.route('/login')
  .post(login)

router.route('/check')
  .get(
    auth,
    check
  )

export default router
