const express = require('express');
const cors = require('cors');
const dotenv = require ('dotenv');



dotenv.config();

const app = express();
// Middleware
app.use(express.json());

app.use(cors());

app.use ('/api/v1/auth', require ('./routes/authRoute'));



const PORT = 4000

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});


