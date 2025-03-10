const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

const users = [];

// Register User
exports.registerUser = async (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    if (!name || !email || !password || !confirmPassword) {
        return res.status(400).json({ msg: 'Please provide all required fields' });
    }

    try {
        // Check if user already exists
        let user = users.find(user => user.email === email);
        if (user) {
            return res.status(400).json({ msg: 'User already exists' });
        }
        
        if (password !== confirmPassword) {
            return res.status(400).json({ msg: 'Passwords do not match.' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create user object
        user = { id: users.length + 1, name, email, password: hashedPassword };

        // Save to in-memory array
        users.push(user);

        res.status(201).json({ message: "User registered successfully" });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Failed to register user", error: err.message });
    }
};

// Login User
exports.loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user in memory
        let user = users.find(user => user.email === email);
        if (!user) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid Credentials' });
        }

        // Generate JWT Token
        const payload = { user: { id: user.id, email: user.email, name: user.name } };
        const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });

        res.json({ message: "Login successful", token });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ message: "Failed to login", error: err.message });
    }
};
