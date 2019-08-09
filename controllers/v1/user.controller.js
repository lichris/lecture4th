const get = async (req, res, next) => {
  try {
    return res.status(200)
      .json({ user: req.user })
  } catch (err) {
    next(err)
  }
}

const update = async (req, res, next) => {
  try {
    let shouldUpdateProfile = false

    if (req.body.address) {
      req.user.profile.address = req.body.address
      shouldUpdateProfile = true
    }

    if (req.body.age) {
      req.user.profile.age = req.body.age
      shouldUpdateProfile = true
    }

    if (req.body.gender) {
      req.user.profile.gender = req.body.gender
      shouldUpdateProfile = true
    }

    if (req.file) {
      req.user.profileImg = req.file.filename

      await req.user.save()
    }

    if (shouldUpdateProfile) {
      await req.user.profile.save()
    }

    return res.status(200)
      .json({ user: req.user })
  } catch (err) {
    next(err)
  }
}

export {
  get,
  update
}