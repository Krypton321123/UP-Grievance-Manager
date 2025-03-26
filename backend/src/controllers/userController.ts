import { Request, Response, Router } from "express";
import { prisma } from "../utils/prismaClient";

const userRouter = Router(); 

userRouter.route("/signup").post(async (req: Request, res: Response) => {
    
    const { firstName, lastName, phoneNo, gender, city, pincode, password, confirmPassword } = req.body; 

    try {

        if (!firstName || !lastName || !phoneNo || !gender || !city || !pincode) {
            return res.status(400).json({ status: false, message: "Wrong inputs", data: {}})
        }

        if (confirmPassword !== password) {
            return res.status(400).json({status: false, message: "Password does not match", data: {}}); 
        }

        const existingUser = await prisma.user.findFirst({
            where: {
                phoneNo
            }
        })

        if (existingUser) {
            return res.status(403).json({ status: false, message: "User already exists with this phone no", data: {}})
        }

        const createUser = await prisma.user.create({
            data: {
                firstName, lastName, phoneNo, City: city, Pincode: pincode, gender, password
            }
        });

        return res.status(200).json({status: true, message: "user successfully created", data: createUser})

    } catch (err) {
        console.log("Signup error: ", err)
        return res.status(500).json({status: false, message: "Internal server error"})
    }
})

userRouter.route('/login').post(async (req: Request, res: Response) => {
    const { phoneNo, password } = req.body; 

    try {  
        const existingUser = await prisma.user.findFirst({
            where: {
                phoneNo
            }
        })

        if (!existingUser) {
            return res.status(400).json({status: false, message: "User already exists", data: {}}); 
        }

        if (existingUser.password !== password) {
            return res.status(403).json({ status: false, message: "Password not matched", data: {}}); 
        }

        return res.status(200).json({status: false, message: "User logged in", data: {existingUser}})


    } catch (err) {
        console.log("Login error: ", err)
        return res.status(500).json({ status: false, message: "Internal server error", data: {}}); 
    }
})

export default userRouter; 