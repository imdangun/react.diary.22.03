const host = 'http://localhost/'

export function toLogin(error) {
    console.log('ERROR]', error)
    if(error.status === 403) window.location.href='login'    
}

export default host