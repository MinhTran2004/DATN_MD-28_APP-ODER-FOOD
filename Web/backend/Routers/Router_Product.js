const express = require('express');
const Product = require('../Model/product');

const router = express.Router();

router.post('/createProduct', async (req, res) => {
    try{
        const data = req.body;
        const product = new Product(data);
        await product.save();

        res.send('Tạo sản phẩm thành công');
    }catch(err){
        console.log(err);
    }
})

router.get('/getAllProduct', async (req, res) => {
    try{
        const product = await Product.find(); 

        res.send(product);
    }catch(err){
        console.log(err);
    }
})

module.exports = router;