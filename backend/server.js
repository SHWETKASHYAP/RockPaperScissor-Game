const express = require('express');
const cors = require('cors');  //-- cors is used to enable Cross-Origin Resource Sharing, allowing the server to handle requests from different origins.

const app = express();
app.use(cors());  //-- This line applies the CORS middleware to the Express application, enabling it to handle cross-origin requests.
app.use(express.json());  //-- This line allows the server to parse incoming JSON payloads, making it easier to handle data sent in the body of requests.

const PORT = process.env.PORT || 8000;

const choices = ["rock","paper","scissors"];

function getWinner(player,computer){
    if(player === computer) return "It's a draw!";

    if((player === "rock" && computer === "scissors") ||
       (player === "paper" && computer === "rock") ||
       (player === "scissors" && computer === "paper")){
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

app.post('/play',(req,res)=>{
    const player = req.body.choice;

    const computer = choices[Math.floor(Math.random()*3)];

    const result = getWinner(player,computer);

    res.json({
        player,
        computer,
        result,
    })
})

app.get('/',(req,res) => {
    res.send('Welcome to the Rock-Paper-Scissors Game API! Use POST /play with a JSON body { "choice": "rock" } to play.');
})

app.get('/health',(req,res)=>{
    res.json({status : "OK"});
})

app.listen(PORT, () => {
    console.log(`Server running on port : ${PORT}`);
})