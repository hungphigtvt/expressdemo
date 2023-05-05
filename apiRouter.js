const express = require('express')
var router = express.Router()


router.get('/', (req, res) =>{
    res.json('router 1 user')
})

router.get('/product', (req, res) =>{
    res.json('router 1 product')
})
router.get('/cart', (req, res) =>{
    res.json('router 1 cart')
})


module.exports = router