# TASL 1 DOCUMENTATION
# Simple JWT Authentication System (No Database) 

This is a basic authentication system using **Node.js**, **Express**, and **JWT (JSON Web Token)** without a database. It allows user **signup and login**, storing users in memory (as it was not mentioned in the task to use a database).

##  Features
 User registration with hashed passwords  
 User login with JWT authentication  
 Password validation using bcrypt  
 Token-based authentication  
 In-memory storage (No database required)  

##  Technologies Used
- **Node.js**
- **Express.js** (Server framework)
- **bcrypt.js** (Password hashing)
- **jsonwebtoken** (JWT-based authentication)
- **dotenv** (For environment variables)

 **Clone the repository:**
   
    git clone https://github.com/queentifee/MentorLed.git

API Endpoints
Method	  Endpoint	     Description
POST	/api/v1/auth/signup	 Register a new user
POST	/api/v1/auth/login	 Login user & get JWT token

# API Usage
# Register a User
# Endpoint:
# POST /api/v1/auth/signup

Request Body:
{
  "name": "Queen Samuel",
  "email": "queensamuel@gmail.com",
  "password": "123456",
  "confirmPassword": "123456"
}
Response (Success):
{
  "message": "User registered successfully"
}
Response (Error - User exists):
{
  "msg": "User already exists"
}

# Login a User
# Endpoint:
# POST /api/v1/auth/login

Request Body:
{
  "email": "queensamuel@gmail.com",
  "password": "123456"
}
Response (Success):
{
  "message": "Login successful",
  "token": "jwt token"
}
Response (Error - Invalid Credentials):
{
  "msg": "Invalid Credentials"
}


# TASK 2 DOCUMENTATION
POST /api/v1/questions/interview-questions
 Description: This endpoint allows users to create a new interview question set.

Request Body 
{
  "title": "Frontend Interview",
  "description": "Common frontend interview questions",
  "questions": [
    "What is React?",
    "Explain the virtual DOM.",
    "What is event delegation?"
  ]
}

Response (Success - 201)
{
  "message": "New data submitted successfully!",
  "data": {
    "title": "Frontend Interview",
    "description": "Common frontend interview questions",
    "questions": [
      "What is React?",
      "Explain the virtual DOM.",
      "What is event delegation?"
    ]
  }
}

Response (Error - 400)
{
  "message": "All fields are required, and questions must be an array"
}

Response (Error - 500)
{
  "message": "Failed to save data",
  "error": "Database connection failed"
}