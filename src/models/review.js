import mongoose from 'mongoose'
import Food from './prods'

const Schema = mongoose.Schema

    const ReviewSchema = new Schema ({
        title : String,
        text : String,
        food : {type: Schema.Types.ObjectId, ref:'food'}
    })

    const Review = mongoose.model('Review', ReviewSchema)

    export { Review }
