// This file checks if a user is logged in and saves their data in the database if they are new.

import { currentUser } from "@clerk/nextjs/server";
import { db } from "../lib/prisma";

export const checkUser = async () =>{
    const user = await currentUser();
    if(!user){
        return null;
    }
    try {
        const loggedInUser = await db.user.findUnique({
            where:{
                clerkUserId: user.id,
            },
        });
        if (loggedInUser){
            return loggedInUser;
        }

        const name = `${user.firstName} ${user.lastName}`;

        const newUser = await db.user.create({
            data:{
                clerkUserId: user.id,
                name,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress,
            },
        });

        return newUser;
    } catch (error) {
        console.log(error.message);
        
        
    }
}