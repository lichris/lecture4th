import express from 'express'
import auth from '../../middlewares/auth.middleware'
import { get, update } from '../../controllers/v1/user.controller'
import { uploadUserProfile } from '../../middlewares/image.middleware'

const router = express.Router()

router.route('/')
  .get(
    auth,
    get
  )
  .put(
    auth,
    uploadUserProfile.single('profileImg'),
    update
  )

export default router