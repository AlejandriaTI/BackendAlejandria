const HttpClientAdapter=require('../adapters/httpClient.adapter')

class PageViewService{
    constructor(){
        this.convertorApi=new HttpClientAdapter('https://graph.facebook.com/v18.0/')
    }

    async sendDataPageView(userIp,userAgent){
        console.log(userIp)
        console.log(userAgent)
        const pixel_id=process.env.PIXEL_ID
        const token=process.env.ACCESS_TOKEN

        console.log(pixel_id,token)
        const data=[{
             event_name:"PageView",
             event_time:Math.floor(Date.now()/1000),
             event_source_url:"https://alejandriaconsultora.com/",
             user_data:{
                client_user_agent:userAgent,
                client_ip_address:userIp
             },
             custom_data:{
                page_title:"Pagina inicio",
                language:"es"
             }
        }
        ]

        return this.convertorApi.post(`${pixel_id}/events`,{
            data:data,
            access_token:token
        })
    }
}

module.exports=PageViewService