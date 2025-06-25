const PageViewService=require('../services/pageViewServices')
const getIp=require('../middlewares/getIpValue')
const pageViewService=new PageViewService()

const controllerPageView=async(req,res)=>{
    try{
    const userIp=getIp(req)
    if(userIp==='::1')user_ip='127.0.0.1'
    const userAgent=req.headers['user-agent']

    const response=await pageViewService.sendDataPageView(userIp,userAgent)
    return res.status(200).json({message:response})
    
    }catch(err){
        return res.status(400).json({"error":err.message})
    }
}

module.exports=controllerPageView