
import express, { Router } from 'express';
import { posts } from '../controllers';

const router = Router();

router.get('/', posts.getOne);
router.post('/', posts.createOne)

export default router;