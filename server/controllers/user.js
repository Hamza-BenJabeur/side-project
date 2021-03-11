import express from 'express';
import mongoose from 'mongoose';


import User from '../models/users.js'


const router = express.Router();

export const getUsers = async (req, res) => { 
    try {
        const users = await User.find();
                
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getUser = async (req, res) => { 
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createUser = async (req, res) => {
    const {firstName,lastName,email,password,imgURL} = req.body;

    const newUser = new User({firstName,lastName,email,password,imgURL})

    try {
        await newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {firstName,lastName,email,password,imgURL} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedUser = {firstName,lastName,email,password,imgURL, _id: id };

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export const deleteUser = async (req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}




export default router;