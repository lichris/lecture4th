import models from '../../models'

const getUsers = async (req, res, next) => {
  try {
    const users = await models.User.findAll()

    return res.status(200)
      .json(users)
  } catch (err) {
    next(err)
  }
}

const deleteUser = async (req, res, next) => {
  try {
    const user = await models.User.findByPk(req.params.id)

    if (!user) {
      return res.status(404)
        .json({ message: '사용자를 찾을 수 없습니다.' })
    }

    await user.destroy()

    return res.status(200)
      .json({ message: '사용자를 삭제하였습니다.' })
  } catch (err) {
    next(err)
  }
}

const getDogs = async (req, res, next) => {
  try {
    const dogs = await models.Dog.findAll()

    return res.status(200)
      .json(dogs)
  } catch (err) {
    next(err)
  }
}

const createDog = async (req, res, next) => {
  try {
    // 기본적인 데이터만 받습니다.
    // 추후 이미지들은 추가하여야 합니다.

    const dog = await models.Dog.create({
      name: req.body.name,
      type: req.body.type,
      age: req.body.age,
      gender: req.body.gender,
      thumbnailImg: req.body.thumbnailImg
    })

    return res.status(201)
      .json(dog)
  } catch (err) {
    next(err)
  }
}

const updateDog = async (req, res, next) => {
  try {
    const dog = await models.Dog.findByPk(req.params.id)

    if (!dog) {
      return res.status(404)
        .json({ message: '강아지를 찾을 수 없습니다.' })
    }

    await dog.update(req.body)
    await dog.reload()

    return res.status(200)
      .json(dog)
  } catch (err) {
    next(err)
  }
}

const deleteDog = async (req, res, next) => {
  try {
    const dog = await models.Dog.findByPk(req.params.id)

    if (!dog) {
      return res.status(404)
        .json({ message: '강아지를 찾을 수 없습니다.' })
    }

    await dog.destroy()

    return res.status(200)
      .json({ message: '강아지를 삭제하였습니다.' })
  } catch (err) {
    next(err)
  }
}

// const approveAdoption = async (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err)
//   }
// }

// const declineAdoption = async (req, res, next) => {
//   try {

//   } catch (err) {
//     next(err)
//   }
// }

export {
  getUsers,
  deleteUser,
  getDogs,
  createDog,
  updateDog,
  deleteDog
  // approveAdoption
  // declineAdoption
}