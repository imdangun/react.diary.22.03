import React, {useEffect} from 'react'
import {signin} from '../config/api-service'

function LoginScreen() {
    useEffect(() => {
        signin({
            email: 'john@john.com',
            password: 'john'
        }).then(user => console.log('LoginScreen', user))
    }, [])

    return <p>로그인</p>
}

export default LoginScreen