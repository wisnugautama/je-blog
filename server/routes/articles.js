const router = require('express').Router()
const images = require('../helpers/image.js')
const { createArticle, findAllarticle, deleteArticle, findMyArticle, updateArticle, findOneArticle, AddComments, deleteComment } = require('../controllers/article-controller')

router.post('/', createArticle)
router.get('/', findAllarticle)
router.get('/me', findMyArticle)
router.get('/:id', findOneArticle)
router.delete('/:id', deleteArticle)
router.put('/comment/:id', AddComments)
router.put('/comment/:id/delete', deleteComment)
router.put('/:id', updateArticle)

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