const Article = require('../models/article')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const createArticle = (req,res) => {
    const { title, description, image } = req.body
    let decoded = jwt.verify(req.headers.token, process.env.JWT_SECRET)
    Article.create({
        title: title,
        description: description,
        userId: decoded.id,
        image: image
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
        .populate('userId')
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

const findOneArticle = (req,res) => {
    Article.findOne({
        _id: req.params.id
    })
        .populate('userId')
        .then((article) => {
            res.status(200).json({
                message: `ini articlenya`,
                data: article
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

const findMyArticle = (req,res) => {
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_SECRET)
    Article.find({
        userId: decoded.id
    }).populate('userId')
        .then((articles) => {
            res.status(200).json({
                message: `my articles`,
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

const updateArticle = (req,res) => {
    const { title,description } = req.body
    Article.update({
        _id: req.params.id
    },{
        title: title,
        description: description
    })
        .then(() => {
            res.status(201).json({
                message: `Article Successfully Updated!`
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
} 

const AddComments = (req,res) => {
    const { comment } = req.body
    let token = req.headers.token
    let decoded = jwt.verify(token, process.env.JWT_SECRET)
    Article.update({
        _id: req.params.id
    }, {
        $push: { comments: {userId: decoded.id, name: decoded.name, comment: comment, date: new Date ()} }
    })
        .then(() => {
            res.status(201).json({
                message: `Successfully added a comment!`
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

const deleteComment = (req,res) => {
    Article.update({
        _id: req.params.id
    },{
        $pull: { comments: {_id: req.body.id_comment}}
    })
        .then(() => {
            res.status(201).json({
                message: `Comment Successfully deleted!`
            })
        })
        .catch((err) => {
            
        });
}

module.exports = {
    createArticle,
    findAllarticle,
    deleteArticle,
    findMyArticle,
    findOneArticle,
    updateArticle,
    AddComments,
    deleteComment
}