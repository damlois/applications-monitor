require('dotenv').config({path: __dirname + '/sample.env'});
const express = require('express');
const app = express();
const router = express.Router();
const config = require('./config');
const port = process.env.PORT;

app.use(express.static(__dirname + "/public"));
app.use('/', router);

router.post('/', (req,res)=>{
    res.sendFile(path.join(__dirname, "public", "index.html"));
})

app.listen(port, ()=>{
    console.log(`running on ${port}`)
    console.log(config.url)
})