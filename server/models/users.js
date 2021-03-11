import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    imgURL: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var User = mongoose.model('User', userSchema);

export default User;