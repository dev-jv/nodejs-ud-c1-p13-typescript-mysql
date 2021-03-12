import { Request, Response } from 'express';
import User from "../models/user";

export const getUsers = async(req: Request, res: Response) => {

    const users = await User.findAll();

    res.json({users});
};

export const getUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id); // PRIMARY key : id

    if(user) {
        res.json(user);
    } else {
        res.status(404).json({
            msg: `There is no user with the id ${id}`
        })
    }
};

export const postUser = async(req: Request, res: Response) => {

    const { body } = req;

    try{
        const exiEmail = await User.findOne({
            where: {
                email:body.email
            }
        });

        if(exiEmail) {
            return res.status(400).json({
                msg: `Email ${body.email} already exists`
            })
        }

        // const user = new User(body);
        // await user.save();
        const user = await User.create(body);
        res.json(user);

    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: 'Contact the administrator'
        })
    }
};

export const putUser = async(req: Request, res: Response) => {

    const { id } = req.params;
    const { body } = req;

    try{
        const user = await User.findByPk(id);

        if(!user) {
            return res.status(404).json({
                msg: `There is no user with id ${id}`
            })
        }

        await user.update(body);

        res.json(user);

    } catch (e) {
        console.log(e);
        res.status(500).json({
            msg: 'Contact the administrator'
        })
    }
};

export const deleteUser = async(req: Request, res: Response) => {

    const { id } = req.params;

    const user = await User.findByPk(id);

    if(!user) {
        return res.status(404).json({
            msg: `There is no user with id ${id}`
        })
    }

    // ------------- Physical Elimination

    await user.destroy();
    res.json(user);

    // ------------- Logical Elimination

    // await user.update({state: false});
    // res.json(user);

};
