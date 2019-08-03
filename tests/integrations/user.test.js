require('dotenv').config()

import request from 'supertest'
import randomString from 'random-string'
import models from '../../models'

const app = require('../../app')

afterAll(() => { models.sequelize.close() })

describe('사용자 조회 테스트', () => {
  // TODO : 사용자가 제대로 조회가 되는지

  beforeAll(async () => {
    await models.User.create({
      nickname: 'test1',
      password: 'test1',
      profileImg: 'https://www.naver.com'
    })

    await models.User.create({
      nickname: 'test2',
      password: 'test2',
      profileImg: 'https://www.naver.com'
    })

    await models.User.create({
      nickname: 'test3',
      password: 'test3',
      profileImg: 'https://www.naver.com'
    })
  })

  test('1번 사용자가 존재하고, 제대로 조회가 되어야 합니다. | 200', async () => {
    let res = await request(app).get('/v1/users/1')

    expect(res.status).toBe(200)
    expect(res.body.user).not.toBe(null)
    expect(res.body.user.nickname).toBe('test1')
    expect(res.body.user.password).toBe('test1')
    expect(res.body.user.profileImg).toBe('https://www.naver.com')
    expect(res.body.user.uid).toMatch(/\b[0-9a-f]{12}\b/g)
  })

  test('사용자를 모두 조회하고, 사용자는 3명이어야 합니다. | 200', async () => {
    let res = await request(app).get('/v1/users')

    expect(res.status).toBe(200)
    expect(res.body.users.length).toBe(3)
  })
})

describe('사용자 생성 테스트', () => {
  // TODO : 사용자가 제대로 생성이 되는지
  test('사용자를 생성하고 모든 데이터가 제대로 저장이 되어야 합니다. | 201', async () => {
    // * POST /v1/users
    const newUser = {
      nickname: randomString(),
      password: randomString(),
      profileImg: 'https://www.naver.com'
    }

    let res = await request(app)
      .post('/v1/users')
      .send(newUser)

    expect(res.status).toBe(201)
    expect(res.body.user.nickname).toBe(newUser.nickname)
    expect(res.body.user.password).toBe(newUser.password)
    expect(res.body.user.profileImg).toBe(newUser.profileImg)
  })
})

describe('사용자 업데이트', () => {
  let user

  beforeAll(async () => {
    user = await models.User.create({
      nickname: randomString(),
      password: randomString(),
      profileImg: 'https://www.naver.com'
    })
  })

  test('사용자는 password 를 변경할 수 있습니다. | 200', async () => {
    const password = 'asdf'
    const profileImg = 'https://www.google.com'

    let res = await request(app)
      .put(`/v1/users/${ user.id }`)
      .send({
        password,
        profileImg
      })

    expect(res.status).toBe(200)
    expect(res.body.user.password).toBe(password)
    expect(res.body.user.profileImg).toBe(profileImg)
  })
})

describe('사용자 삭제', () => {
  let user

  beforeAll(async () => {
    user = await models.User.create({
      nickname: randomString(),
      password: randomString(),
      profileImg: 'https://www.naver.com'
    })
  })

  test('사용자를 삭제할 수 있습니다. | 200', async () => {
    let res = await request(app)
      .delete(`/v1/users/${ user.id }`)

    expect(res.status).toBe(200)

    res = await request(app)
      .get(`/v1/users${ user.id }`)

    expect(res.status).toBe(404)
  })
})