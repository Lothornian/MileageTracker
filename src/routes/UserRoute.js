import {Router} from 'Express';
import {users} from '../data/data.js';

const router = new Router();

router.get ('/', (req, res) => {

  return res.json(users);

});

export default router;
