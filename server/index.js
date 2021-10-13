import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import Routes from './routes/routes.js'
import cors from 'cors'

//components
import Connection from './database/db.js';
import defaultData from './default.js'


dotenv.config();

const app = express();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);

const PORT = 8000;



const username = process.env.DB_USERNAME
const password = process.env.DB_PASSWORD


Connection(username,password);

app.listen(PORT , () => console.log(`server is successfully running on ${PORT}`));


// data to database
defaultData();