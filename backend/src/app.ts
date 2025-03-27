import express from 'express';
import cors from 'cors'; 
import userRouter from './controllers/userController.js';
import grievanceRouter from './controllers/grievanceController.js';
import adminRouter from './controllers/adminController.js';
import modelRouter from './controllers/aitasks.js';

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true, limit: '16kb' })); 
app.use(cors({
    origin: '*' // for connected
})); 

app.use('/api/user', userRouter)
app.use('/api/grievance', grievanceRouter)
app.use('/api/admin', adminRouter)


export default app; 