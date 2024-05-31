import express from 'express';
import { CreateUser, DeleteUser, GetAllUsers, GetUserByEmail, UpdateUser, login } from '../controller/userController.js';

const routers = express.Router();


routers.post('/create', CreateUser);
routers.get('/get', GetAllUsers);
routers.get('/get/:email', GetUserByEmail);
routers.post('/login', login);
routers.put('/update/:id', UpdateUser);
routers.delete('/delete/:id', DeleteUser);



export default routers;