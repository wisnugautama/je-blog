const router = require('express').Router()
const { createArticle, findAllarticle, deleteArticle } = require('../controllers/article-controller')

router.post('/', createArticle)
router.get('/', findAllarticle)
router.delete('/:id', deleteArticle)


module.exports = router