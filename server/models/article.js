var mongoose = require('mongoose')
var Schema = mongoose.Schema

var articleSchema = new mongoose.Schema({
    title: {
        type: String
    },

    description: {
        type: String
    },
    comments: [{
        userId: { type: Schema.Types.ObjectId, ref: 'User' },
        name: String,
        comment: String,
        date: Date
    }],
    userId: { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps: true
})

var Article = mongoose.model('Article', articleSchema)

module.exports = Article