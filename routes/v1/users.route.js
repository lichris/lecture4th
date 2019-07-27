import express from 'express'
import {
  get,
  create,
  update,
  destroy
} from '../../controllers/v1/user.controller'

const router = express.Router()

// * GET /v1/users : 사용자 조회
// * POST /v1/users : 사용자 생성
router.route('/')
  .get(get)
  .post(create)

// * GET /v1/users/:id : 특정 사용자 조회
// * PUT /v1/users/:id : 특정 사용자 수정
// * DEL /v1/users/:id : 특정 사용자 삭제
router.route('/:id')
  .get(get)
  .put(update)
  .delete(destroy)

export default router