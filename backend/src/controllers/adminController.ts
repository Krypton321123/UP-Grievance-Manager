import { Request, Response, Router } from "express";
import { prisma } from "../utils/prismaClient";

const adminRouter = Router(); 

adminRouter.route('/add').post(async (req: Request, res: Response) => {

    const { username, password, designation, specialisation } = req.body; 

    try {

        if (!username || !password || !designation || !specialisation) {
            return res.status(400).json({status: false, message: "No data found", data: {}});
        }

        const existingAdmin = await prisma.admin.findFirst({
            where: {
                username
            }
        })

        if (existingAdmin) {
            return res.status(403).json({status: false, message: "Admin with this username already exists", data: {}})
        }

        const newAdmin = await prisma.admin.create({
            data: {
                username, password, designation, specialisation
            }
        })

        return res.status(200).json({status: false, message: "New admin created", data: newAdmin}); 

    } catch (err) {
        console.log("Add admin error: ", err)
    }

})

adminRouter.route('/monReport').post(async (req: Request, res: Response) => {

})

adminRouter.route('/issueAssign').post(async (req: Request, res: Response) => {
    const { grievance_id, admin_id } = req.body; 

    try {

        const grievance = await prisma.grievance.findFirst({
            where: {
                grievance_id
            }
        })
        
        if (!grievance_id) {
            return res.status(400).json({status: false, message: "No grievance with this id exists", data: {}}); 
        }

        const updatedGrievance = await prisma.grievance.update({
            where: {
                grievance_id
            }, 
            data: {
                admin_id
            }
        }); 

        return res.status(200).json({status: false, message: "Grievance updated successfully", data: updatedGrievance}); 

    } catch (err) {
        console.log("Issue assign error: ", err)
        return res.status(500).json({status: false, message: "Internal Server Error"});
    }
})

adminRouter.route('/dashboard').get(async (req: Request, res: Response) => {
    
    const pendingGrievances = await prisma.grievance.findMany({
        where: {
            status: 'OPEN'
        }
    })

    const resolvedGrievances = await prisma.grievance.findMany({
        where: {
            status: 'CLOSED'
        }
    })

    const newGrievances = await prisma.grievance.findMany({}); 

    return res.status(200).json({status: true, message: "Data fetched succesfully", data: {pendingGrievances, resolvedGrievances, newGrievances}})

})

adminRouter.route('/login').post(async (req: Request, res: Response) => {

    const { username, password } = req.body; 
    console.log(username, password)

    try {

        if (!username || !password) {
            return res.status(400).json({status: false, message: "Empty data", data: {}}); 
        }

        const checkAdmin = await prisma.admin.findFirst({
            where: {
                username
            }
        })

        if (!checkAdmin) {
            return res.status(400).json({status: false, message: "Admin with this username doesn't exist", data: {}})
        }

        console.log(checkAdmin.password !== password)
        if (checkAdmin.password !== password) {
            return res.status(403).json({status: false, message: "Passwords don't match"})
        }

        return res.status(200).json({status: true, message: "user logged in successfully", data: checkAdmin})

    } catch (err) {

    }

})

export default adminRouter; 