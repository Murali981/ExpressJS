const express = require('express')


const app = express()

app.use(express.json()); // We are accepting the data in json format.

app.use(express.urlencoded()); // This is to decode the data sent through HTML form.

app.use(express.static('public'));

const PORT = process.env.PORT || 5000


app.get('/form' , (req,res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.post('/formPost' , (req,res) => {
    console.log(req.body);
});

app.listen(PORT , ()=> {
    console.log(`Server is running on port ${PORT}`)
});