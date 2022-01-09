import express from 'express';
import { Request, Response } from 'express'
import {PostModel} from '../../data/models/post'
import { mongoose } from '@typegoose/typegoose';
const app = express();
const port = 3000;

export default async function createOne(req: Request, res: Response) {
    const post = await PostModel.create(req.body);
    res.status(201);
    return res.send("created a new post");
}