const axios=require('axios')
const HttpClientAdapter=require('../adapters/httpClient.adapter')

const PIXEL_ID=process.env.PIXEL_ID

class formService{
    constructor(){
        this.convertorApi=new HttpClientAdapter('https://graph.facebook.com/v18.0/')
    }

    async pullFormData(data,user_agent,user_ip){
        return this.convertorApi.post(`/${PIXEL_ID}/events`,{
            "data":[
                {
                    "event_name":"Lead",
                    "event_time":Math.floor(Date.now()/1000),
                    "action_source":"website",
                    "event_source_url":`https://alejandriaconsultora.com/${data.url}`,
                    "user_data":{
                        fn:[hashSHA256(data.nombres)],
                        ln:[hashSHA256(data.apellidos)],
                        ph:[hashSHA256(data.whatsapp)],
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