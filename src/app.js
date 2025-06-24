const express=require('express')
const routerForm = require('./routes/forms')
require('dotenv').config()

const app=express()
const port=process.env.PORT || 3000

app.use(express.json())

app.use('/api',routerForm)

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})