'use strict'

const Product = require('../models/product');

function getProduct (req, res){
    let productId = req.params.productId

    Product.findById(productId, (err, product)=>{
        if(err) return res.status(500).send({ message: `Error al realizar la peticion: ${err}`})
        if (!product) return res.status(400).send({message: 'El producto no existe'})
        res.status(200).send({product});    
  })

}

function getProducts (req, res){
 Product.find({}, (err, products)=>{
    if(err) return res.status(500).send({message: `Error al realizar la peticion ${err}`})
        if(!products) return res.status(404).send({message: 'No existen los productos'})

            res.status(200).send({products});
    })
}

function postProduct (req, res){
    console.log(req.body)
    let product = new Product()
    product.name = req.body.name;
    product.price = req.body.price;
    product.description = req.body.description;
    product.images = req.body.images;
    product.stock = req.body.stock;
    product.discounts = req.body.discounts;
    product.stars = req.body.stars;
    product.comments = req.body.comments;
    product.author = req.body.author;

    product.save((err, productStored)=>{
        if(err) res.status(500).send({message: `Error al salvar el producto en la BD: ${err}`})
            res.status(200).send({product: productStored})
})

}

function updateProduct (req, res){
    let productId = req.params.productId
    let update = req.body
    Product.findByIdAndUpdate(productId, update, (err, productUpdated)=>{
     if(err) res.status(500).send({message: `Error al actualizar el producto: ${err}`})
        res.status(200).send({product: productUpdated})
    })

}

function deleteProduct (req, res){
    let productId = req.params.productId
    Product.findById(productId, (err, product)=>{
       if(err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
        
        product.remove(err=>{
         if(err) res.status(500).send({message: `Error al borrar el producto: ${err}`})
         res.status(200).send({message: 'El producto ha sido eliminado'})
        })
    })


}

module.exports = {
    getProduct,
    getProducts,
    postProduct,
    updateProduct,
    deleteProduct,
}

