var mongoose  = require('mongoose')
const {Schema} = mongoose
const {ObjectId} = Schema
//kêt nối cơ sở dữ liệu
var connectDatabase = async ()=>{
   try{
       let uri = 'mongodb://127.0.0.1:27017/multishop'
       let options = {
           connectTimeoutMS: 10000,// 10 giây
           useNewUrlParser: true,
           useCreateIndex: true,
       }
       await mongoose.connect(uri,options)
       console.log('Connect database successfully')
   }catch(e){
       console.log(`Connect database faile ${e}`)
   }
}
connectDatabase()
module.exports = {
    mongoose
}