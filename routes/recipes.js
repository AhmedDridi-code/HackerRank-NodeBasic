var recipes = require('../recipes.json');
var router = require('express').Router();

router.get("/",(req,res)=>{
  let page = req.query.page || 1;
  let limit = req.query.limit || 3;
  let nbr = (page-1)*limit;
  let recipe = recipes.slice(nbr,nbr+limit);
  return res.status(200).send(recipe);
})


module.exports = router;

