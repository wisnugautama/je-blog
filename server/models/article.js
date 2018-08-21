var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new mongoose.Schema({
    title: {
        type: String
    },

    description: {
        type: String
    },
    comment: [],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article