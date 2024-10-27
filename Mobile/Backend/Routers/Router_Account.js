const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Importing JWT
const Account = require('../Model/account');

const router = express.Router();

// Secret key for JWT signing
const JWT_SECRET = 'secret_key123'; // Change this to a secure key in production

// Registration Route
router.post('/register', async (req, res) => {
    try {
        const { username, account, password,  phone, role, status } = req.body;

        // Validate required fields
        if (!username || !account || !password || !phone || !role || !status) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        // Check if username already existss
        const existingUser = await Account.findOne({ username });
        const exitingPhone  = await Account.findOne({phone});
        const exitingEmail  = await Account.findOne({account});

        if (existingUser) {
            return res.status(400).json({ message: 'Tên tài khoản đã tồn tại' });
        }
        if ( exitingPhone) {
            return res.status(400).json({ message: 'Số điện thoại đã tồn tại.' });
        }

        if ( exitingEmail) {
            return res.status(400).json({ message: 'Địa chỉ email đã tồn tại' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new account
        const newAccount = new Account({
            username,
            account,
            password: hashedPassword,
            phone,
            role,
            status,
        });

        await newAccount.save();
        res.status(201).json({ message: 'Đã đăng kí tài khoản thành công.' });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
});

// Login Route
router.post('/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        // Validate required fields
        if (!username || !password) {
            return res.status(400).json({ message: 'Username and password are required.' });
        }

        // Find the account by username
        const account = await Account.findOne({ username });
        if (!account) {
            return res.status(400).json({ message: 'Invalid username or password.' });
        }

        // Check the password
        const isMatch = await bcrypt.compare(password, account.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid username or password.' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: account._id, username: account.username }, JWT_SECRET, { expiresIn: '1h' });

        // Login successful
        res.status(200).json({ message: 'Login successful.', token,account });
    } catch (error) {
        res.status(500).json({ message: 'Server error.', error: error.message });
    }
});

module.exports = router;
