const express = require('express')
const app = express()
const path = require('path')

const {products} = require('./data')


app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app._router.get('/api/products/', (req, res, next) => {
    const newProducts = products.map((product) =>{
        const {id, name, image} = product  
        return {id, name, image}
    })
    res.json(newProducts)
})
app._router.get('/api/products/:productID', (req, res) => {
    // console.log(req)    
    console.log(req.params)

    const {productID} = req.params

    const singleProduct = products.find((product) =>product.id === Number(productID))
    if (!singleProduct){
        return res.status(404).json({success: false, msg: `No product with id ${productID}`})
    }else{
        return res.json(singleProduct)
    }
    // res.json(singleProduct)
})


// Listen for Requests
const port = process.env.PORT || 5000
app.listen(port, (req, res, next) => {
    console.log(`Server is listening on port http://${port}`)
})