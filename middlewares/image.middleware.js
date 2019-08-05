import path from 'path'
import multer from 'multer'

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, `${ __dirname }/../public/images/`)
    },
    filename: function (req, file, cb) {
      cb(null, new Date().valueOf() + path.extname(file.originalname))
    }
  })
})

export {
  upload
}