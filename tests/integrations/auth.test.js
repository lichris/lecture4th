import request from 'supertest'
import randomString from 'random-string'
import models from '../../models'

const app = require('../../app')

let password
let user

// 로그인 테스트를 하기 위해서 사용자를 하나 만듭니다.
beforeAll(async () => {
  password = randomString()

  user = await models.User.create({
    nickname: randomString(),
    password,
    profileImg: 'https://www.naver.com'
  })
})

afterAll(() => { models.sequelize.close() })

test('임시 테스트코드', async () => {
  let res = await request(app)
    .post('/v1/auth/login')
    .send({
      nickname: user.nickname,
      password
    })

  expect(res.body.accessToken).toBeTruthy()
})