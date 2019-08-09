import express from 'express'
// import auth from '../../middlewares/auth.middleware'
import { get } from '../../controllers/v1/dog.controller'

const router = express.Router()

router.route('/')
  .get(
    get
  )

export default router
