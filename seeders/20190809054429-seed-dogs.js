'use strict'
require('dotenv').config()
import { generate } from '../utils/uid.util'

/* eslint-disable */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'dogs',
      [
        {
          uid: Buffer(generate(), 'hex'),
          name: '두리',
          type: '리트리버',
          age: 2,
          gender: 'm',
          thumbnailImg: '/images/dogs/duri1.jpg'
        },
        {
          uid: Buffer(generate(), 'hex'),
          name: '루루',
          type: '셰퍼드',
          age: 2,
          gender: 'm',
          thumbnailImg: '/images/dogs/lulu1.jpg'
        },
        //해피
        {
          uid: Buffer(generate(), 'hex'),
          name: '해피',
          type: '스피츠',
          age: 1,
          gender: 'f',
          thumbnailImg: '/images/dogs/happy1.png'
        },
        //호두
        {
          uid: Buffer(generate(), 'hex'),
          name: '호두',
          type: '말라뮤트',
          age: 0,
          gender: 'f',
          thumbnailImg: '/images/dogs/hodoo1.png'
        },
        //사랑이
        {
          uid: Buffer(generate(), 'hex'),
          name: '사랑이',
          type: '요크셔테리어',
          age: 1,
          gender: 'm',
          thumbnailImg: '/images/dogs/love1.png'
        },
        //몽이
        {
          uid: Buffer(generate(), 'hex'),
          name: '몽이',
          type: '시바',
          age: 1,
          gender: 'f',
          thumbnailImg: '/images/dogs/mong1.png'
        },
        {
          uid: Buffer(generate(), 'hex'),
          name: '초코',
          type: '포메라니안',
          age: 0,
          gender: 'm',
          thumbnailImg: '/images/dogs/choco1.png'
        }
      ],
      {}
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('dogs', null, {})
  }
}
