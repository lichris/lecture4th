import express from 'express'
import { hello } from '../../controllers/v1/auth.controller'

const router = express.Router()

router.route('/hello')
  .get(hello)

export default router
