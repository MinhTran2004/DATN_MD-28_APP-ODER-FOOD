const express = require('express');
const Product = require('../Model/product');

const router = express.Router();

// GET paginated products
// TODO: Might support query (discount - category) later
router.get('', async (req, res) => {
    try {
        // Parse query parameters for pagination
        const page = parseInt(req.query.page); // Default to page 1
        const limit = isNaN(parseInt(req.query.limit)) ?  10 : parseInt(req.query.limit); // Default to 10 items per page
        const skip = page * limit;

        // Fetch paginated products
        const products = await Product.find().skip(skip).limit(limit);
        const total = await Product.countDocuments();

        res.json({
            total,
            page,
            pages: Math.ceil(total / limit),
            data: products,
        });
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch products' });
        console.error(error);
    }
});

module.exports = router;