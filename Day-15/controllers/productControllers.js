// const { productCollection } = require("../config/db")
const productModel = require("../models/productModels");


const getProducts = async (req,res)=>{
    
    // const products = await productCollection.find().toArray();
    const products = await productModel.find({});

    res.send({
        status : "success",
        data: {
            // products : products
            products
        }
    })
        

}

const createProduct = async (req,res)=>{
    try{

        const body = req.body;
        console.log("....", body);
       // const newProduc = await productCollection.insertOne(body);
       const newProduc = await productModel.create(body);

        res.json({
            status: "sucess",
            products: newProduc,
        })
    }
    catch(err){
        console.log(err);
        res.status(500);
        res.json({
            status: 'failed',
            message: "Internal server Error",
            
        })
    }
    
   

}

const replaceProduct = async (req, res)=>{
    try{
        const {id} = req.params
        const body = req.body
        

        const replace = await productModel.findOneAndReplace({_id:id}, body, {new:true});

        res.send({
            status: "success",
            data: {
                products: replace
            }
        })

    }
    catch(err){
        console.log(err)
        console.log("Internal error in repalace product")
        console.log(Error.message)
        info: err
    }
}


module.exports = {
    getProducts,
    createProduct,
    replaceProduct
}