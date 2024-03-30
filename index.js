const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from node API server')
    });

//create product endpoint
    app.post('/api/products',async (req, res) => {
        try{
           const product = await Product.create(req.body)
           res.status(200).json({product})
        }catch{
            res,status(500).json({message: error.message})
        }
    });

    //update product endpoint

    app.put('/api/products/:id', async (req, res) => {
        try{
            const {id} = req.params;
            const product = await Product.findByIdAndUpdate(id, req.body);
            
            if(!product){
                return res.status(404).json({message: 'Product not found'});
            }

            const updatedProduct = await Product.findById(id);

            res.status(200).json({updatedProduct});
        }catch{
            res.status(500).json({message: error.message})
        }
    });

    //delete product endpoint4
    app.delete('api/products/:id', async (req, res) => {
        try {
            const {id} = req.params;
            const product = await Product.findByIdAndDelete(id);
            console.log('id');
            console.log(id);
            console.log(product);
            if(!product){
                return res.status(404).json({message: 'Product not found'});
            }
            res.status(200).json({message: 'Product deleted successfully'})
        } catch (error) {
            res.status(500).json({message: 'internal server error'})
        }
    });


    //get all products
    app.get('/api/products', async (req, res) => {
        try{
            const products = await Product.find();
            res.status(200).json({products});
        }
        catch{
            res.status(500).json({message: error.message})
        }
    });

    //get product by id
    app.get('/api/products/:id', async (req, res) => {
        try{
            const {id} = req.params;
            const product = await Product.findById(id);
            res.status(200).json({product});
        }catch{
            res.status(500).json({message: 'internal server error'})
        }
    });

    mongoose.connect('mongodb+srv://dilanka:Dilanka.2001%40mongodb@backenddb.nusexyd.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(
        ()=>{
            console.log('Connected to MongoDB');
            app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
        }
    )
    .catch(
        (err)=>{
            console.log('Error: ', err)
            console.log('connection failed')
        }
    );
    