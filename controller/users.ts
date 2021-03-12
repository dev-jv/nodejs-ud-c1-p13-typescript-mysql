import { Request, Response } from 'express';
import User from "../models/user";

export const getUsers = async(req: Request, res: Response) => {

    const users = await User.findAll();

    res.json({users});
};

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params;
    console.log(req);
    console.log(id);

    const user = await User.findByPk(id); // PRIMARY key : id

    if(user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `There is no user with the id ${id}`
        })
    }

    // const { id } = req.params;
    //
    // res.json({
    //     msg: 'getUser',
    //     id
    // })
};

export const postUser = (req: Request, res: Response) => {

    const { body } = req;

    res.json({
        msg: 'postUser',
        body
    })
};

export const putUser = (req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    res.json({
        msg: 'putUser',
        body,
        id
    })
};

export const deleteUser = (req: Request, res: Response) => {

    const { id } = req.params;

    res.json({
        msg: 'deleteUser',
        id
    })
};
