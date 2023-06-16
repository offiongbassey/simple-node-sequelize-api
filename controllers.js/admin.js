const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
const {title, imageUrl, price, description } = req.body
if(!title || !imageUrl || !price || !description){
    return res.status(400).json('All field is required');
}

Product.create({
    title,
    price,
    imageUrl,
    description
}).then(result => {
    return res.status(201).json("Product Created Successfully");
}).catch(err => {
    return res.status(400).json("An error occured");
})
}
exports.getProducts = (req, res, next) => {
    Product.findAll()
    .then(products => {
        if(!products){
            return res.status(400).json("Products not available");
        }
       return res.status(200).json(products)   
    })
    .catch(err => {
        return res.status(400).json(err);
    })
}
exports.getProduct = (req, res, next) => {
    const productId = req.params.productId;
    Product.findByPk(productId)
    .then(product => {
        if(!product){
            return res.status(400).json("Product Unavailable");
        }
        return res.status(200).json(product);
    })
    .catch(err => {
        return res.status(400).json(err);
    })
}
exports.getEditProduct = (req, res, next) => {
    const productId = req.params.productId;
        Product.findByPk(productId)
        .then(product => {
            if(!product){
                return res.status(400).json("Products Unavailable");
            }
            return res.status(200).json(product)
        })
        .catch(err => {
            return res.status(400).json(err);
        })
}

exports.patchEditProduct = (req, res, next) => {
    const productId = req.params.productId;
    const {title, price, imageUrl, description } = req.body;
    if(!title || !price || !imageUrl || !description){
        return res.status(400).json("All field is required");
    }
    Product.findByPk(productId)
    .then(product => {
        product.title = title;
        product.price = price;
        product.imageUrl = imageUrl;
        product.description = imageUrl;
        return product.save()
    })
    .then(result => {
        return res.status(200).json("Product Successfully Updated");
    })
    .catch(err => {
        return res.status(400).json(err);
    })
}
exports.deleteProduct = (req, res, next) => {
    const {productId} = req.params;
    Product.findByPk(productId)
    .then(product => {
        if(!product){
            return res.status(400).json("Sorry, product not found");
        }
        return product.destroy();
    })
    .then(result => {
        return res.status(200).json("Product Deleted Successfully");
    })
    .catch(err => console.log(err));
};