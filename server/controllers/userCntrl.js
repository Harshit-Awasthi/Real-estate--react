import asyncHandler from 'express-async-handler'

import {prisma} from "../config/prismaConfig.js"

export const createUser = asyncHandler(async(req,res) => {
    
    console.log("creating a User");

    let {email} = req.body;

    console.log(email);
    
    
})