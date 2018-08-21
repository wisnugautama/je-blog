const User = require('../models/user')
const bcrypt = require('bcryptjs')

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
                res.status(200).json({
                    message: `Login Successfully`,
                    data: user
                })
            }else {
                res.status(400).json({
                    message: `password wrong!`
                })
            }
        })
        .catch((err) => {
            res.status(400).json({
                message: `email wrong!`
            })
        });
}

module.exports = {
    register,
    login
}