const HttpClientAdapter=require('../adapters/httpClient.adapter')
const hashSHA256=require('../middlewares/cryptoHash')


class formService{
    constructor(){
        this.convertorApi=new HttpClientAdapter('https://graph.facebook.com/v18.0/')
    }
    
    async pullFormData(data,user_agent,user_ip){
        const pixel_id=process.env.PIXEL_ID
        console.log(pixel_id)
        console.log(hashSHA256(data.nombres),hashSHA256(data.apellidos),hashSHA256(`+51${data.telefono}`))
        if(user_ip==='::1') user_ip='127.0.0.1'
        console.log(user_ip)
        console.log(user_agent)
        return this.convertorApi.post(`/${pixel_id}/events`,{
            "data":[
                {
                    "event_name":"Lead",
                    "event_time":Math.floor(Date.now()/1000),
                    "action_source":"website",
                    "event_source_url":`https://alejandriaconsultora.com/`,
                    "user_data":{
                        fn:[hashSHA256(data.nombres)],
                        ln:[hashSHA256(data.apellidos)],
                        ph:[hashSHA256(`+51${data.telefono}`)],
                        client_ip_address:user_ip,
                        client_user_agent:user_agent
                    },
                    "custom_data":{
                        "tipo_servicio":data.servicio??null,
                        "carrera":data.carrera,
                        "universidad":data.universidad
                    }
                    
                }
            ],
            "access_token":process.env.ACCESS_TOKEN
        })
    }
}
module.exports=formService