import {Router} from 'https://deno.land/x/oak/mod.ts';
import {getUsers, createUser, getUser} from './controllers/UserController.ts';
import {API_VERSION} from './config/config.ts';

const router = new Router();

router.get(`${API_VERSION}/users`, getUsers)
    .post(`${API_VERSION}/users`, createUser)
    .get(`${API_VERSION}/users`, getUser)

export default router;