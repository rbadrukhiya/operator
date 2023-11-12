var express = require('express');
var router = express.Router();
var data = require('../models/user')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/adddata' , async function(req , res , next){
  try{
    var user = await data.create(req.body)
    res.status(201).json({
      success:user
    })
  }
  catch(err)
  {
    res.status(401).json({
        success:err
    })  
  }
})


// comparision operator 
router.get('/getdata' , async function(req , res , next){
  try{
    var user = await data.find()
    res.status(201).json({
      success:user
    })
  }
  catch(err)
  {
    res.status(401).json({
        success:err
    })  
  }
})

router.get('/compare' , async function(req , res , next){
  try{
    // var user = await data.find({'price':{$eq:'15.99'}})
    var user = await data.find({'id':{$lt:"5"}})
    res.status(201).json({
      success:user
    })
  }
  catch(err)
  {
    res.status(401).json({
        success:err
    })  
  }
})




module.exports = router;



