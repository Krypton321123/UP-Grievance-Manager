import { Request, Response, Router } from "express";
import { prisma } from "../utils/prismaClient";

const grievanceRouter = Router(); 

grievanceRouter.route('/create').post(async (req: Request, res: Response) => {
    const { title, description, user_id, image, type, priority, pincode, city } = req.body; 

 
    try {

        if (!title || !description || !user_id || !type || !priority || !pincode || !city) {
            return res.status(400).json({status: false, message: "No data found"}); 
        }

        const date = Date.now(); 

        const newGrievance = await prisma.grievance.create({
            data: {
                title, description, user_id, City: city, Pincode: pincode, type, priority, created_at: date.toString(), status: 'OPEN'
            }
        }) 

        return res.status(200).json({status: false, message: "New grievance created", data: newGrievance}); 
        

    } catch (err) {
        console.log("Grievance create error: ", err); 
    }
})

export default grievanceRouter; 