const mongoose = require('mongoose');

let ArticleSchema = new mongoose.Schema(
    {
        text: String,
        title: String,
        description:String,
        feature_img:String,
        claps: Number,

        author:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },

        comments: [
            {
                author:{
                    type: mongoose.Schema.Types.ObjectId,
                    ref:'User'
                },
                text: String
            }
        ]
    }
);
//Attaching Method to Schema 
ArticleSchema.methods.clap = () =>{
    this.claps++
    return this.save()
}

//Attaching Comment method to Schema

ArticleSchema.methods.comment =() =>{
    this.comments.push(c)
    return this.save()
}

//Adding Author method

ArticleSchema.methods.addAuthor =(author_id) =>{
    this.author = author_id
    return this.save()
}

//Adding get user article method

ArticleSchema.methods.getUserArticle =(_id) =>{
   Article.find({'author': _id}).then((article)=>{
       return article
   })
}

//Exporting Module
module.exports = mongoose.model('Article',ArticleSchema)