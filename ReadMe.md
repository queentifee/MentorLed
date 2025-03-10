# Simple JWT Authentication System (No Database)

This is a basic authentication system using **Node.js**, **Express**, and **JWT (JSON Web Token)** without a database. It allows user **signup and login**, storing users in memory.

---

##  Features
 User registration with hashed passwords  
 User login with JWT authentication  
 Password validation using bcrypt  
 Token-based authentication  
 In-memory storage (No database required)  

---

##  Technologies Used
- **Node.js**
- **Express.js** (Server framework)
- **bcrypt.js** (Password hashing)
- **jsonwebtoken** (JWT-based authentication)
- **dotenv** (For environment variables)

---


 **Clone the repository:**
   
    git clone https://github.com/queentifee/MentorLed.git

API Endpoints
Method	  Endpoint	     Description
POST	/api/v1/routes/signup	 Register a new user
POST	/api/v1/routes/login	 Login user & get JWT token


