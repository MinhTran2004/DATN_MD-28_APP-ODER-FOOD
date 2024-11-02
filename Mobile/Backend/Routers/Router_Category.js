const express = require('express');
const Category = require('../Model/category');

const router = express.Router();

// GET /category - Fetch all categories without pagination
router.get('', async (req, res) => {
    try {
        const categories = await Category.find();
        const total = await Category.countDocuments();

        res.json({
            total,
            page: 1,
            pages: 1,
            data: categories,
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error });
    }
});

// GET /categories/:id - Fetch a specific category by ID
router.get(':id', async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findById(id);

        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        res.json(category);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch category' });
    }
});

module.exports = router;