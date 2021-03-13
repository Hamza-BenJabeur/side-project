import express from 'express';
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

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

export const signIn = async (req, res) => {
    const {firstName,lastName,userName,email,password,imgURL} = req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    const newUser = new User({firstName,lastName,userName,email,password:hashedPassword,imgURL})
    try {
  
        await newUser.save();

        res.status(201).json(newUser );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {firstName,lastName,userName,email,password,imgURL} = req.body;
    const hashedPassword= await bcrypt.hash(password,10);
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser = {firstName,lastName,userName,email,password:hashedPassword,imgURL, _id: id };

    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}

export const deleteUser = async (req, res) => { 
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}




export default router;