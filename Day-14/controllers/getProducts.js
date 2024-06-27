const express = require("express");
const { produectsCollection } = require("../database/db.js");
const app = express();
app.use(express.json());
const insertProduct = async (req, res)=>{
    const body = req.body;
    if(!body.title || !body.price){
        res.status(400);
        res.json({
            status: "fail",
            message: "Title and price are required"
        });
        return;
    }
    const result=  await produectsCollection.insertOne(body)
    res.json({
        status: "success",
        data: {
            products: result,
        }
    })
}

const getProduct = async (req, res) =>{
    const products = await produectsCollection.find().toArray();
    res.json({
        status: "success",
        data: {
            products: products,
        }
    })
}

module.exports = {
    insertProduct,
    getProduct
}
