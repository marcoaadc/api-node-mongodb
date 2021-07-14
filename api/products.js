const Inventory = require ('../models/product')

module.exports = app => {
const get = async (req,res) => {
    try{
        const prods = await Inventory.find()
        res.json(prods)
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
const post = async (req,res) => {
    const { name, description, qnt, effect} = req.body

    const product = new Inventory({
        name,
        description,
        qnt,
        effect
    })

    try{
        const newItem = await product.save()
        res.status(201).json(newItem)
    }
    catch(err){
        res.status(500).json({msg: err.message})
    }
}
return {get,post}
}