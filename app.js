// APIs Marvel:  https://developer.marvel.com/docs
// Your public key:  5a237863b3cc2061003cbbc4fe20dc06
// Your private key:  fbf255068eccea6d0ef951b9f25626b57ab2fe72
const express = require('express');
const path = require('path');
const nomeApp = process.env.npm_package_name;
const app = express();

app.use(express.static(`${__dirname}/public/`));

app.get('/*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/public/index.html?hash=123`));
});

app.listen(process.env.PORT || 8080);
console.log(`server started`);
