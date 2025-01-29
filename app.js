import express from 'express';
import bodyParser from "body-parser";


const app = express();

app.use(bodyParser.urlencoded({extended: false}))

app.use('/add-product', (req, res) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Submit</button>')
})

app.use('/product', (req, res) => {
    console.log(req.body.title);
    res.redirect('/')
})

app.use('/', (req, res, next) => {
    res.send('<h1>test application</h1>')
})

app.listen(3000)