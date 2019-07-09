const {mongoose} = require('../database/database')
const {Schema} = mongoose
const ProductSchema = new Schema({
    name: {
        type: String,
    },
    quantity :{
        type: String,
       
    },
    photo :{
        type:String,
    },
    special :{
        type : Boolean
    },
    views :{
        type :Number
    },
    description:{
        type :String
    },
    categoryId :{type :mongoose.Schema.Types.ObjectId,ref :"Category"},
    brandId :{type :mongoose.Schema.Types.ObjectId,ref :"Brand"},
    status:{
        type :Boolean
    }

})
const Product = mongoose.model('Product', ProductSchema)
module.exports= {Product}
