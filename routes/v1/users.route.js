import express from 'express'
import auth from '../../middlewares/auth.middleware'
import {
  get,
  update
} from '../../controllers/v1/user.controller'

const router = express.Router()

router.route('/')
  .get(
    auth,
    get
  )
  .put(
    auth,
    update
  )

export default router