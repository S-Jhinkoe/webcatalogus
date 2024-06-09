import express from 'express';
import cors from 'cors';
import fs from 'node:fs';
const app = express();
const port = 3000;

app.use(cors());

app.get('/nshoes', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/shoes.json', function (err, data) {
        res.send(data);
    })
});

app.get('/puma-shoes', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/pshoes.json', function (err, pdata) {
        res.send(pdata);
    })
});



app.get('/drmartens-shoes', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/drshoes.json', function (err, drdata) {
        res.send(drdata);
    })
});

app.get('/adidas-shirts', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/adidasshirt.json', function (err, addata) {
        res.send(addata);
    })
});

app.get('/hugo-shirts', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/hugoshirts.json', function (err, hudata) {
        res.send(hudata);
    })
});

app.get('/tommy-shirts', (req, res) => {
    res.setHeader('Content-type', 'application/json;charset=UTF-8');
    fs.readFile('data/tommyshirts.json', function (err, todata) {
        res.send(todata);
    })
});

app.get('/sweaters', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);

}); 