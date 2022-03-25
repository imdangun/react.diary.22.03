import React from 'react'
import App from './App'
import Login from './component/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

function AppRouter() {
    return (     
        <BrowserRouter>          
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='login' element={<Login/>}/>
            </Routes>          
            <Box mt={5}><Copyright/></Box>
        </BrowserRouter>
    )
}

function Copyright() {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright ©'} 
            my.com, {new Date().getFullYear()}
        </Typography>
    )
}

export default AppRouter