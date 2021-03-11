import express from 'express';
import bcrypt from 'bcrypt';
import User from '../models/users.js'
import jwt from 'jsonwebtoken';
const router = express.Router();

 export const login = async (req, res) => {
  
    try {
        const users = await User.find();
        const user=users.find(user=>user.userName===req.body.userName)
        if (user == null) {
          return res.status(400).send('Cannot find user')
        }
    
      if(await bcrypt.compare(req.body.password, user.password)) {
       
        jwt.sign({user}
        , 'secretkey', async (err, token) => {
  
          await res.json(
         [ {user},{token}]
          );
        });
      } else {
        res.send('Check your password')
      }
    } catch {
      res.status(500).send("nothing is working")
    }
  }
  export default router;