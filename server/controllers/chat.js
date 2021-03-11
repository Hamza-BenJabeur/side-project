import express from 'express';
import mongoose from 'mongoose';

import ChatMessage from '../models/messages.js';

const router = express.Router();

export const getChats = async (req, res) => { 
    try {
        const chatMessages = await ChatMessage.find();
                
        res.status(200).json(chatMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getChat = async (req, res) => { 
    const { id } = req.params;

    try {
        const chat = await ChatMessage.findById(id);
        
        res.status(200).json(chat);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createChat = async (req, res) => {
    const {message} = req.body;

    const newChatMessage = new ChatMessage({message})

    try {
        await newChatMessage.save();

        res.status(201).json(newChatMessage );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateChat = async (req, res) => {
    const { id } = req.params;
    const {message} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedChat = {message, _id: id };

    await ChatMessage.findByIdAndUpdate(id, updatedChat, { new: true });

    res.json(updatedChat);
}

export const deleteChat = async (req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ChatMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;