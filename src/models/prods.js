import mongoose from 'mongoose'
import { Review } from './review';
const Schema = mongoose.Schema;

const FoodSchema  = new Schema({
    title : String,
    description : String,
    price : Number,
    review : [{type:Schema.Types.ObjectId, ref:'Review'}]
})


const Food = mongoose.model('Food', FoodSchema)

export { Food }