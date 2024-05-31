import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './utils/db.js';
import routers from './routes/router.js';


dotenv.config();
const app = express();
app.use(cors());



// connecting database
connectDB();

app.use(express.json());

app.use('/api', routers);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});
