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

let access

test('로그인 후 정상적으로 jwt 를 받아야 합니다.', async () => {
  let res = await request(app)
    .post('/v1/auth/login')
    .send({
      nickname: user.nickname,
      password
    })

  access = res.body.accessToken

  expect(res.body.accessToken).toBeTruthy()
})

test('위에서 받은 jwt 로 유효한 인증을 받아야 합니다.', async () => {
  let res = await request(app)
    .get('/v1/auth/check')
    .set('Authorization', `Bearer ${ access }`)

  expect(res.statusCode).toBe(200)

  console.error(res.body.message)
})

