var User = require('../models/user')

const register = (req,res) => {
    const { name, email, password } = req.body
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
                message: `Email is already Exist`
            })
        })
}

const getAllUser = (req,res) => {
    User.find()
        .then((result) => {
            res.status(200).json({
                message: ` ini data nya bro`,
                data: result
            })
        }).catch((err) => {
            res.status(400).json({
                message: err.message
            })
        });
}

module.exports = {
    register,
    getAllUser
}