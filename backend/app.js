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
    res.send([
        {
         "name": "Murder Mystery",
         "genre": "Comedy",
         "description": "A New York cop and his wife go on a European vacation to reinvigorate the spark in their marriage."
        },
        {
         "name": "The Hitman's Bodyguard",
         "genre": "Action",
         "description": "Michael Bryce, a protection agent, is tasked with protecting Darius Kincaid, one of the world's most famous assassins."
        },
        {
         "name": "Mirage",
         "genre": "Drama",
         "description": "A space-time continuum glitch allows Vera to save a boy's life 25 years in the past, but somehow results in the loss of her daughter."
        }
    ]);
});

app.listen(3000, () => {console.log("The server is listening on port 3000.")});