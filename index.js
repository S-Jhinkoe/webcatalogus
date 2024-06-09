import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
const app = express();
const port = 3000;

app.use(cors());

app.get('/shoes', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shoes.json', function(err, data){
        res.send(data);
    })
});

app.get('/puma-shoes', (req, res) => {
    res.send('Hello World!');
});

app.get('/nike-shoes', (req, res) => {
    res.send('Hello World!');
});

app.get('/drmartens-shoes', (req, res) => {
    res.send('Hello World!');
});

app.get('/sweaters', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

}); 