const express = require('express');
const cors = require('cors');
const connectToDatabase = require ('./src/config.js');

const dotenv = require ('dotenv');



dotenv.config();

const app = express();
// Middleware
app.use(express.json());

app.use(cors());

app.use ('/api/v1/auth', require ('./routes/authRoute'));
app.use ('/api/v1/questions', require ('./routes/questionsRoute'));
app.use ('/api/v1/interview', require ('./routes/interviewRoute'));


const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});

connectToDatabase();

