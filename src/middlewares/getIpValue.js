

function getIp(req){
    if(req.headers['cf-connecting-ip']){
        return req.headers['cf-connecting-ip']
    }
    const forwardedFor=req.headers['x-forwarded-for']
    if(forwardedFor){
        return forwardedFor.split(',')[0].trim();
    }

    return req.ip
}

module.exports=getIp