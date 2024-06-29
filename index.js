import dotenv from 'dotenv'
dotenv.config();
import express from 'express';

const app = express();
const PORT = process.env.PORT;
const HOST =  'localhost';
const SEC = process.env.SEC;

app.get('/', (req, res) => {


    res.send(`Hello World! This from ${SEC}`);
});

app.get('/:usr',(req,res)=>{
    const user = req.params.usr;
    res.send(`Hello ${user}`)
});


app.listen(PORT, () => {

  console.log(`Server running on http://${HOST}:${PORT}`);
});
