const express = require('express')
const {Product} = require('../models/Product')
const findAll = async (req, res)=>{
    try {
        let products = await Product.find({})
        res.json({
            error :false,
            message :'Get data products successful',
            data: products
        })
    } catch (error) {
        res.json({
            error :true,
            message :`Error ${error}` 
        })
    }
}
const create = async (req, res)=>{

}
module.exports = {findAll, create}