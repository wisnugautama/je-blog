const Article = require('../models/article')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createArticle = (req,res) => {
    const { title, description } = req.body
    let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    Article.create({
        title: title,
        description: description,
        userId: decoded.id
    })
        .then((article) => {
            res.status(201).json({
                message: `Successfully create an article`,
                data: article
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

const findAllarticle = (req,res) => {
    Article.find()
        .then((articles) => {
            res.status(200).json({
                message: `success get all articles`,
                data: articles
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

const deleteArticle = (req,res) => {
    Article.deleteOne({
        _id: req.params.id
    })
        .then(() => {
            res.status(200).json({
                message: `Article successfully deleted`
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

module.exports = {
    createArticle,
    findAllarticle,
    deleteArticle
}