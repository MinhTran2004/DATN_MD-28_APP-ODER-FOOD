const express = require('express');
const Account = require('../Model/account');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const router = express.Router();

// Register route
router.post('/register', async (req, res) => {
    const { username, account, password, phone, role, status } = req.body;

   
    if (!username || !account || !password || !phone || !role || !status) {
        return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
    }

    try {
        
        const existingAccount = await Account.findOne({ account });
        if (existingAccount) {
            return res.status(400).json({ message: 'Tài khoản đã tồn tại' });
        }

        
        const existingPhone = await Account.findOne({ phone });
        if (existingPhone) {
            return res.status(400).json({ message: 'Số điện thoại đã được sử dụng' });
        }

        
        const existingUsername = await Account.findOne({ username });
        if (existingUsername) {
            return res.status(400).json({ message: 'Tên người dùng đã tồn tại' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        const newAccount = new Account({
            username,
            account,
            password: hashedPassword,
            phone,
            role,
            status,
        });

        await newAccount.save();
        res.status(201).json({ message: 'Tài khoản đã được tạo thành công' });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Lỗi khi tạo tài khoản', error: error.message });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { account, password } = req.body;

   
    if (!account || !password) {
        return res.status(400).json({ message: 'Vui lòng điền đầy đủ thông tin.' });
    }

    try {
       
        const existingAccount = await Account.findOne({ account });
        if (!existingAccount) {
            return res.status(400).json({ message: 'Thông tin xác thực không hợp lệ' });
        }

        
        const isPasswordValid = await bcrypt.compare(password, existingAccount.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Thông tin xác thực không hợp lệ' });
        }

        // Create a token (you can customize payload and expiration)
        const token = jwt.sign({ id: existingAccount._id, role: existingAccount.role }, 'your_jwt_secret', { expiresIn: '1h' });

        res.status(200).json({
            message: 'Đăng nhập thành công',
            token,
            account: {
                username: existingAccount.username,
                account: existingAccount.account,
                phone: existingAccount.phone,
                role: existingAccount.role,
                status: existingAccount.status,
                image: existingAccount.image,
            }
        });
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: 'Lỗi khi đăng nhập', error: error.message });
    }
});

module.exports = router;
