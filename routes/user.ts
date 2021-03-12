import { Router } from 'express';

import { getUsers, getUser, postUser, putUser, deleteUser } from '../controller/users';

const router = Router();

router.get('/', getUsers);
router.get('/:id', getUser);
router.post('/', postUser);
router.put('/', putUser);
router.delete('/', deleteUser);

export default router;
