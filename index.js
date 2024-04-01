const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/product.route')
const app = express()

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use('/api/products', productRoutes);


app.get('/', (req, res) => {
    res.send('Hello from node API server')
    });


mongoose.connect('mongodb+srv://dilanka:Dilanka.2001%40mongodb@backenddb.nusexyd.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(
        ()=>{
            console.log('Connected to the Database');
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
    