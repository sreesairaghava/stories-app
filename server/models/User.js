const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema({

    name: String,
    email: String,
    provider: String,
    provider_id: String,
    token: String,
    provider_pic: String,
    followers:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ],
    following:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }
    ]
})

//Attaching methods to Schema and these we will use in operations

//follow method

UserSchema.method.follow = () =>{
    if(this.following.indexOf(user_id) === -1){
        this.following.push(user_id)
    }
    return this.save()
}

//addFollower method

UserSchema.methods.addFollower = (fs) =>{
    this.follower.push(fs)
}

//Module export

module.exports = mongoose.model('User', UserSchema)