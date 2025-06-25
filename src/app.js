const express=require('express')
const cors=require('cors')
const routerForm = require('./routes/forms')
const pageViewRouter = require('./routes/pageView')
const apiRouter=express.Router()
require('dotenv').config()

const app=express()
const port=process.env.PORT


app.use(cors())
app.use(express.json())
app.use('/api',apiRouter)

apiRouter.use('/form',routerForm)
apiRouter.use('/pageview',pageViewRouter)

app.listen(port,()=>{
    console.log(`Servidor escuchando en el puerto ${port}`)
})