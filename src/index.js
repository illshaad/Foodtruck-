import express from 'express'
import 'dotenv/config';
import mongoose from 'mongoose';
import volleyball from 'volleyball'
const {PORT,DB_url} = process.env;
import pug from 'pug'
import path from 'path' 
const app = express()
mongoose.connect(DB_url);
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log('ça marche ici') // c'est pour tester la connection de mangodb avec un message d'erreur //
});

//PUG//
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

import {foodRouter} from './routes/route'


app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use(volleyball);
app.use("/foodtruck", foodRouter)

app.listen(PORT,() =>{
    console.log(`test!:${PORT}`)
})