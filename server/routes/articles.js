const router = require('express').Router()
const { createArticle, findAllarticle, deleteArticle, findMyArticle, updateArticle, findOneArticle, AddComments, deleteComment } = require('../controllers/article-controller')

router.post('/', createArticle)
router.get('/', findAllarticle)
router.get('/me', findMyArticle)
router.get('/:id', findOneArticle)
router.delete('/:id', deleteArticle)
router.put('/comment/:id', AddComments)
router.put('/comment/:id/delete', deleteComment)
router.put('/:id', updateArticle)



module.exports = router