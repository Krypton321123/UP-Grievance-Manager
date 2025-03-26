import { Request, Response, Router } from "express";

const grievanceRouter = Router(); 

grievanceRouter.route('/create').post(async (req: Request, res: Response) => {
    const { title, description, user_id, image, type, priority } = req.body; 

    try {

        if (!title || !description || !user_id || !type || !priority) {
            return res.status(400).json({status: false, message: "No data found"}); 
        }

    } catch (err) {
        console.log("Grievance create error: ", err); 
    }
})

export default grievanceRouter; 