const hello = (req, res, next) => {
  try {
    return res.status(200)
      .json({ message: req.query.id })
  } catch (err) {
    next(err)
  }
}

const login = async (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
}

export { login, hello }