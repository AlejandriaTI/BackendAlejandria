import axios from 'axios'

class HttpClientAdapter{
    constructor(baseURL){
        this.client=axios.create({
            baseURL,
            timeout:5000
        })
        this.client.interceptors.response.use(
            response=>response,
            error=>{
                const status=error.response?.status || 500
                const message=error.response?.data?.error?.message || error.message
    
                console.error(`[Interceptor] Error ${status}: ${message}`)
                return Promise.reject(new Error(`Error ${status}: ${message}`))
            }
        )
    }


    async get(path,config={}){
        return this.client.get(path,config).then(res=>res.data)
    }

    async post(path,data,config={}){
        return this.client.post(path,data,config).then(res=>res.data)
    }

    async put(path,data,config={}){
        return this.client.put(path,data,config).then(res=>res.data)
    }
    async delete(path,config={}){
        return this.client.delete(path,config={}).then(res=>res.data)
    }
}

module.exports=HttpClientAdapter