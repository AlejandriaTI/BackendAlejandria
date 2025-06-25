const express=require('express')
const routerForm=express.Router()
const controllerConvertorApi=require('../controllers/formControllers')

routerForm.post('/form/add',controllerConvertorApi)

module.exports=routerForm