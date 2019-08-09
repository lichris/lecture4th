import path from 'path'
import multer from 'multer'

const uploadUserProfile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file) {
        cb(null, `${ __dirname }/../public/images/users/`)
      }
    },
    filename
  })
})

const uploadDogProfile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file) {
        cb(null, `${ __dirname }/../public/images/dogs/`)
      }
    },
    filename
  })
})

const filename = (req, file, cb) => {
  if (file) {
    cb(null, new Date().valueOf() + path.extname(file.originalname))
  }
}

export {
  uploadUserProfile,
  uploadDogProfile
}