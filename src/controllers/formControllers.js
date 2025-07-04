const getIp=require('../middlewares/getIpValue')
const FormService=require('../services/formServices')
const formService=new FormService()

const controllerConvertorApi=async(req,res)=>{
    try{
    const data=req.body
    const userAgent=req.headers['user-agent']
    const {nombres,apellidos,servicio,carrera,universidad,telefono,url}=data
    
    if(!nombres||!apellidos||!carrera||!universidad||!telefono){
        return res.status(400).json({"message":"Faltan enviar campos"})
    }

    const userIp=getIp(req)

    await formService.pullFormData(data,userAgent,userIp)

    return res.status(200).json({message:"Se registro correctamente los valores del formulario"})

    }catch(err){
        return res.status(400).json({error:err.message})
    }
}

module.exports=controllerConvertorApi