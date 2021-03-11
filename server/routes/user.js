import  express from "express";

import  { getUsers,createUser,getUser,updateUser,deleteUser} from '../controllers/user.js';
import {login} from '../controllers/authentication.js'


const router = express.Router();

router.get('/', getUsers);
router.post('/', createUser);
router.post('/auth',login)
router.get('/:id', getUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);

export default router;