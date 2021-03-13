import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    userName:String,
    email: String,
    password: String,
    imgURL: String,
    msgID:[String],
    channelID:[String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var User = mongoose.model('User', userSchema);

export default User;