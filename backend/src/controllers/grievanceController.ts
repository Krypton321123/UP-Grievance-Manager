import { Request, Response, Router } from "express";
import { prisma } from "../utils/prismaClient";
import { generatePriority, checkFraudulent } from "./aitasks.js";

const grievanceRouter = Router(); 

grievanceRouter.route('/create').post(async (req: Request, res: Response) => {
    const { title, description, user_id, image, type, pincode, city } = req.body; 

 
    try {

        if (!title || !description || !user_id || !type || !pincode || !city) {
            return res.status(400).json({status: false, message: "No data found"}); 
        }   

        const isFraud = await checkFraudulent(title, description); 

        if (isFraud) {
            return res.status(201).json({status: false, message: "The user is a fraud", data: {isFraud}})
        }

        const date = Date.now(); 

        const priority: any = generatePriority(title, description);

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