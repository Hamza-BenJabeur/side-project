import  express from "express";

import  { getChannels,createChannel,updateChannel,deleteChannel} from '../controllers/channel.js';


const router = express.Router();

router.get('/', getChannels);
router.post('/', createChannel);
router.patch('/:id', updateChannel);
router.delete('/:id', deleteChannel);

export default router;