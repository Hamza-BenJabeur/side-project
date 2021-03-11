import  express from "express";

import  { getChats,createChat,getChat,updateChat,deleteChat} from '../controllers/chat.js';


const router = express.Router();

router.get('/', getChats);
router.post('/', createChat);
router.get('/:id', getChat);
router.patch('/:id', updateChat);
router.delete('/:id', deleteChat);

export default router;