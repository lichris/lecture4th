import models from '../../models'

const get = async (req, res, next) => {
  try {
    const dogs = await models.Dog.findAll({
      where: {
        isAdopted: false
      },
      include: [
        { model: models.DogImage, as: 'images' }
      ]
    })

    return res.status(200)
      .json({ dogs })
  } catch (err) {
    next(err)
  }
}

export {
  get
}