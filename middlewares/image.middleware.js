import path from 'path'
import multer from 'multer'

const uploadUserProfile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file) {
        cb(null, `${ __dirname }/../public/images/users/`)
      }
    },
    filename: (req, file, cb) => {
      if (file) {
        cb(null, new Date().valueOf() + path.extname(file.originalname))
      }
    }
  })
})

const uploadDogProfile = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file) {
        cb(null, `${ __dirname }/../public/images/dogs/`)
      }
    },
    filename: (req, file, cb) => {
      if (file) {
        cb(null, new Date().valueOf() + path.extname(file.originalname))
      }
    }
  })
})

export {
  uploadUserProfile,
  uploadDogProfile
}