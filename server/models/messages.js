import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema({
    message: String,
    userID:[String],
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var ChatMessage = mongoose.model('ChatMessage', chatSchema);

export default ChatMessage;