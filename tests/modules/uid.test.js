import { generate } from '../../utils/uid.util'

test('default 일 경우 길이가 12자여야 합니다.', () => {
  const randomByteString = generate()

  expect(randomByteString.length).toBe(12)
})

test('default 일 경우 길이가 12자여야 합니다.', () => {
  const randomByteString = generate()

  expect(randomByteString).toMatch(/\b[0-9a-f]{12}\b/g)
})

const length = 8
test(`length 를 ${ length } 로 주었을 때, 길이가 ${ length } 가 되어야 함.`, () => {
  const randomByteString = generate(length)

  expect(randomByteString.length).toBe(length)
})