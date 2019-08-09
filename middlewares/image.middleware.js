import path from 'path'
import multer from 'multer'

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      if (file) {
        cb(null, `${ __dirname }/../public/images/`)
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
  upload
}