import express from 'express';
import mongoose from 'mongoose';

import Channel from '../models/channel.js';
import User from '../models/users.js'
const router = express.Router();

export const getChannels = async (req, res) => { 
    try {
        const channels = await Channel.find();
                
        res.status(200).json(channels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createChannel = async (req, res) => {
    const {name,description,userID} = req.body;

    const newChannel = new Channel({name,description})
    newChannel.userID.push(userID)

    try {
        await newChannel.save();
        const currentUser= await User.findById(userID)
        await User.findByIdAndUpdate(userID,{...currentUser,channelID:currentUser.channelID.push(newChannel._id)})
        
        res.status(201).json(newChannel);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateChannel = async (req, res) => {
    const { id } = req.params;
    const {name,description} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No channel with id: ${id}`);
    const currentChannel=await Channel.findById(id)
    const updatedChannel = {name,descrption, _id: id };

    await ChatMessage.findByIdAndUpdate(id, {...currentChannel,name,description}, { new: true });

    res.json(updatedChannel);
}

export const deleteChannel = async (req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No channel with id: ${id}`);

    await Channel.findByIdAndRemove(id);

    res.json({ message: "Channel deleted successfully." });
}




export default router;