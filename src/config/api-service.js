import host from './api-config'

export default async function apiCall(api, method, data) {
    let options = {
        headers: new Headers({
            'Content-Type': 'application/json'
        }),        
        method: method
    } 

    let promise
    /*
        [[Prototype]]: Promise
        [[PromiseState]]: "fulfilled"
        [[PromiseResult]]: Response
    */
    
    if(method === 'get') {
        let url = new URL(host + api)
        if(data) for(let k in data) {url.searchParams.append(k, data[k])}
        promise = fetch(url)
    } else {
        options.body = JSON.stringify(data) // method: get 에는 body 를 사용할 수 없다.
        promise = fetch(host + api, options)
    }    
    console.log(host + api, options)    
        
    return promise.then(response => {      
        /*             
            body: ReadableStream
            bodyUsed: true
            headers: Headers {}
            ok: true
            redirected: false
            status: 200
            statusText: ""
            type: "cors"
            url: "http://localhost/diary/todos"
            [[Prototype]]: Response 
        */
        /*
            body: ReadableStream
            bodyUsed: false
            headers: Headers {}
            ok: false
            redirected: false
            status: 403
            statusText: ""
            type: "cors"
            url: "http://localhost/diary/todos"
            [[Prototype]]: Response 
        */             
        if(response.ok && method === 'get') {                      
            return response.json()
             /*
                [[Prototype]]: Promise
                [[PromiseState]]: "fulfilled"
                [[PromiseResult]]: Array(1)
            */ 
        } else {
            if(response.status === 403) {            
                //window.location.href='/login'
                return Promise.reject('ERROR] 403')
            }
        }       
    })
}

export function signin(user) {    
    return apiCall('user/signin', 'get', user)
}