const User = require('../models/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = (req,res) => {
    const { name, email, password } = req.body
    User.findOne({
        email: email
    })
        .then((user) => {
            if (user == null) {
                User.create({
                    name: name,
                    email: email,
                    password: password
                })
                    .then((data_user) => {
                        res.status(201).json({
                            message: `User Successfully created`,
                            data: data_user
                        })
                    })
                    .catch((err) => {
                        res.status(400).json({
                            message: err.message
                        })
                    })
            }else {
                res.status(400).json({
                    message: `Email is duplicated`
                })
            }
        })
        .catch((err) => {
            
        });
}

const login = (req,res) => {
    const { email,password } = req.body
    User.findOne({
        email: email
    })
        .then((user) => {
            let check_pass = bcrypt.compareSync(password, user.password);
            if (check_pass) {
                let token = jwt.sign({id: user._id, name: user.name, email: user.email}, process.env.JWT_SECRET)
                res.status(200).json({
                    message: `Login Successfully`,
                    token
                })
            }else {
                res.status(200).json({
                    message: `email / password wrong!`
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

const getMe = (req,res) => {
    let token = req.headers.token
    let decode = jwt.verify(token, process.env.JWT_SECRET)
    User.findOne({
        _id: decode.id
    })
        .then((result) => {
            res.status(200).json({
                data: result
            })
        })
        .catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

module.exports = {
    register,
    login,
    getMe
}