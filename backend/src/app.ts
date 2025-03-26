import express from 'express';
import cors from 'cors'; 
import userRouter from './controllers/userController';

const app = express(); 

app.use(express.json()); 
app.use(express.urlencoded({ extended: true, limit: '16kb' })); 
app.use(cors({
    origin: '*' // for connected
})); 

app.use('/user', userRouter)


export default app; 