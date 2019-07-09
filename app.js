const express = require('express')
const app = express()
const PORT = 3000
//nhung middleware body-parser vao express
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//tuy bien router
const productsRouter = require('./routes/productRouter')
app.use('/products', productsRouter)

//start server
app.listen(PORT,()=>{
    console.log(`Listinging on Port  ${PORT}`)
})