const express = require('express');

const app = express();

const reqFilter = (reqobject , resobject , next) => {
    console.log('reqFilter');
    next();
}

app.use(reqFilter);

app.get('/' , (req,res) => {
    res.send("Welcome to simpli learn");
});


app.get('/home' , (req,res) => {
    res.send("Welcome to simpli learn home page");
});


app.listen(3000, ()=>{
    console.log("Listening to port 3000");
});




/*app.get('/getRequest' , (req,res) => {
    res.send("Hello this is successful get request")
});

app.post('/postRequest' , (req,res) => {
    res.send("Hello this is successful post request")
}); */