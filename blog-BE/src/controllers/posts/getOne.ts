import express from 'express';
import { Request, Response } from 'express'
const app = express();
const port = 3000;

export default function getOne(req: Request, res: Response) {
    return res.send("hamada")
}