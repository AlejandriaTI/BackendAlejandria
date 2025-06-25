const express=require('express')
const routerForm=express.Router()
const controllerConvertorApi=require('../controllers/formControllers')

routerForm.post('/add',controllerConvertorApi)

module.exports=routerForm