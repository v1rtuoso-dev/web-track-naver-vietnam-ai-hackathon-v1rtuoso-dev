const express = require('express');
const { User } = require('../models');
const packageJson = require('../../package.json');
const router = express.Router();

// Get version
router.get('/version', (req, res) => {
    res.json({ version: packageJson.version });
});

// Get current user
router.get('/current_user', async (req, res) => {
    try {
        if (req.session && req.session.userId) {
            const user = await User.findByPk(req.session.userId);
            if (user) {
                return res.json({
                    user: {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        language: user.language,
                        appearance: user.appearance,
                        timezone: user.timezone,
                    },
                });
            }
        }

        res.json({ user: null });
    } catch (error) {
        console.error('Error fetching current user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Register
router.post('/register', async (req, res) => {
    try {
        const { name, email, password, confirmPassword } = req.body;

        // Validation
        if (!name || !email || !password || !confirmPassword) {
            return res.status(400).json({ 
                errors: ['All fields are required'] 
            });
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ 
                errors: ['Passwords do not match'] 
            });
        }

        if (password.length < 6) {
            return res.status(400).json({ 
                errors: ['Password must be at least 6 characters long'] 
            });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
            return res.status(400).json({ 
                errors: ['User with this email already exists'] 
            });
        }

        // Create new user
        const user = await User.create({
            name,
            email,
            password, // This will be hashed by the beforeValidate hook
        });

        // Set session
        req.session.userId = user.id;

        await new Promise((resolve, reject) => {
            req.session.save((err) => {
                if (err) reject(err);
                else resolve();
            });
        });

        res.status(201).json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                language: user.language,
                appearance: user.appearance,
                timezone: user.timezone,
            },
        });
    } catch (error) {
        console.error('Registration error:', error);
        if (error.name === 'SequelizeValidationError') {
            return res.status(400).json({ 
                errors: error.errors.map(err => err.message) 
            });
        }
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ error: 'Invalid login parameters.' });
        }

        const user = await User.findOne({ where: { email } });
        if (!user) {
            return res.status(401).json({ errors: ['Invalid credentials'] });
        }

        const isValidPassword = await User.checkPassword(
            password,
            user.password_digest
        );
        if (!isValidPassword) {
            return res.status(401).json({ errors: ['Invalid credentials'] });
        }

        req.session.userId = user.id;

        await new Promise((resolve, reject) => {
            req.session.save((err) => {
                if (err) reject(err);
                else resolve();
            });
        });

        res.json({
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                language: user.language,
                appearance: user.appearance,
                timezone: user.timezone,
            },
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Logout
router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if (err) {
            console.error('Logout error:', err);
            return res.status(500).json({ error: 'Could not log out' });
        }

        res.json({ message: 'Logged out successfully' });
    });
});

module.exports = router;
