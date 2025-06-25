const express=require('express')
const controllerPageView = require('../controllers/pageViewController')
const pageViewRouter=express.Router()


pageViewRouter.post('/add',controllerPageView)

module.exports=pageViewRouter