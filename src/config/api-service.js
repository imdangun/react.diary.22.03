import host from './api-config'

export default async function apiCall(api, method, data) { 
    let headers = new Headers({
        'content-type': 'application/json'
    })
    const token = localStorage.getItem('token')
    if(token && token != null) headers.append('Authorization', 'Bearer ' + token)

    //for(let val of headers.values()) console.log(val)   

    let options = {
        headers,      
        method: method
    }
    
    /*
    if(method === 'get') { // method: get 에는 body 를 사용할 수 없다.
        let url = new URL(host + api)
        if(data) for(let k in data) {url.searchParams.append(k, data[k])}
        promise = fetch(url)
    } else {
        options.body = JSON.stringify(data) 
        promise = fetch(host + api, options)
    }
    */  
   if(data) options.body = JSON.stringify(data)   
   let promise = fetch(host + api, options)
       /*
        [[Prototype]]: Promise
        [[PromiseState]]: "fulfilled"
        [[PromiseResult]]: Response
    */
        
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
        // 200 <= response.status < 300 이면, response.ok = true 이다.
        if(response.ok && response.status !== 204) {                 
            return response.json()
             /*
                [[Prototype]]: Promise
                [[PromiseState]]: "fulfilled"
                [[PromiseResult]]: Array(1)
            */ 
        } else {
            if(response.status === 403) {                        
                window.location.href='/login'
                return Promise.reject('ERROR] 403')
            }
        }       
    })
}

export async function signin(user) { 
    console.log('user', user)  
    return apiCall('user/signin', 'post', user)
        .then(user => {                      
            if(user.token) {
                localStorage.setItem('token', user.token)
                window.location.href = '/'
            }
        })
}

export async function signout() {
    localStorage.setItem('token', null)
    window.location.href = '/login'
}

export async function signup(user) {
    return apiCall('user/signup', 'post', user)
}