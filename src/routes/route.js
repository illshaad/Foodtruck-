import express from 'express'
import mongoose from 'mongoose'
import {Review} from '../models/review'
import { Food } from '../models/prods'
const foodRouter = express.Router()

foodRouter.post('/add',(req,res)=>{
    const newFood = new Food(req.body)
    newFood.save((err,saveFood)=>{
        if(err) res.send(err)
        res.json(savefood)
    })
})

foodRouter.get('/add', (req,res)=>{
    res.render('foodtruck')
})
foodRouter.get('/',(req,res) => {
    Food.find({},(err, foods) => {
        if(err) res.send(err)
        res.render('index')
    })
})

foodRouter.get('/:id',(req,res) => {
    let _id = req.params.id;
    Food.findById({_id}, (err, food)=>{
        if(err) res.send(err)
        res.json(food)
    })
})
foodRouter.delete('/:id',(req,res)=>{
    let _id = req.params.id;
    Food.remove({_id}, (err, result)=>{
        if(err) res.send('err')
            res.send('degage')
    })
})

//

foodRouter.post('/review/add/:id',(req,res)=>{
    Food.findById(req.params.id, (err,food) =>{
        if(err) res.send(err)

        const newReview = new Review(req.body)
        newReview.save((err, review)=>{
            if(err) res.send(err)
            food.review.push(newReview)
            food.save((err,review)=>{
                if(err) res.send(err)
                res.json({message:'ajout add'})
            })
        })
    })
})
   
foodRouter.put('/:id', (req, res) => {
    Food.findById({_id:req.params.id}, (err, food) => {
        if(err) res.send(err)
        Object.assign(food, req.body).save((err,food) => {
            if(err) res.send(err)
            res.json({food});
        })
    })
})

export { foodRouter }