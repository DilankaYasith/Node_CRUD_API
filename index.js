const express = require('express')
const mongoose = require('mongoose')
const app = express()



app.get('/', (req, res) => {
    res.send('Hello from node API server')
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
    