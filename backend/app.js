const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.post('/user',(req,res) => {
    var user = {
        "name" : req.body.name,
        "email" : req.body.email,
    }
    console.log("User",user.name,"added.");
    try{
        res.send(req.body);
    }catch(err){
        res.send(err);
    }
});

app.get('/movies',(req,res) => {
    res.send([{"name":"Movie 1"},{"name": "Movie 2"}]);
});

app.listen(3000, () => {console.log("The server is listening on port 3000.")});