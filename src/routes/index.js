const express= require('express');
const router = express.Router();
const path = require('path');
const {join} = require('path');

router.get('/', (req, res) =>{
    res.render('index.html');
    
});

module.exports = router;