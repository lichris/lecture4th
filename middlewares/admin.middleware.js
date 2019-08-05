import models from '../models'

export default async (req, res, next) => {
  try {
    const admin = await models.Admin.findOne({
      where: {
        userId: req.user.id
      }
    })

    if (!admin) {
      return res.status(401)
        .json({ message: '관리자 권한이 필요합니다.' })
    }

    req.user.setDataValue('isAdmin', true)

    next()
  } catch (err) {
    next(err)
  }
}