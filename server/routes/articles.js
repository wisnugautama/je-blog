const express = require('express')
const router = express.Router()
const images = require('../helpers/image.js')
const { auth }  = require('../middleware/auth')
const { createArticle, findAllarticle, deleteArticle, findMyArticle, updateArticle, findOneArticle, AddComments, deleteComment } = require('../controllers/article-controller')

router.post('/',auth, createArticle)
router.get('/',findAllarticle)
router.get('/me',auth, findMyArticle)
router.get('/:id', findOneArticle)
router.delete('/:id',auth, deleteArticle)
router.put('/comment/:id',auth, AddComments)
router.put('/comment/:id/delete',auth, deleteComment)
router.put('/:id',auth, updateArticle)

router.post('/upload',
  images.multer.single('image'), 
  images.sendUploadToGCS,
  (req, res) => {
    res.send({
      status: 200,
      message: 'Your file is successfully uploaded',
      link: req.file.cloudStoragePublicUrl
    })
  })



module.exports = router