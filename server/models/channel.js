import mongoose from 'mongoose';

const channelSchema = new mongoose.Schema({
    name: String,
    description:String,
    userID:[String]
})

var Channel = mongoose.model('channel', channelSchema);

export default Channel;