import  express from "express";

import  { getChannels,createChannel,updateChannel,deleteChannel,addUserToChannel} from '../controllers/channel.js';


const router = express.Router();

router.get('/', getChannels);
router.post('/', createChannel);
router.patch('/:id', updateChannel);
router.delete('/:id', deleteChannel);
router.patch('/add/:id',addUserToChannel)

export default router;