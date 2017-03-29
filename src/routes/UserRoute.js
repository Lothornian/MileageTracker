import {Router} from 'Express';
// import {users} from '../data/data.js';
import {getCollection} from '../db.js';
import {closeDb} from '../db.js';

const router = new Router();

const getAllUsers = async() => {
  const users = await getCollection('users');

  return await ( await users.find({})).toArray();
}

router.get ('/', (req, res) => {

  return getAllUsers()
    .then(users => {
        console.log(users);
        return res.json(users);
    })
});

export default router;
