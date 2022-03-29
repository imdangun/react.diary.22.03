import React from 'react'
import DiaryScreen from './screen/DiaryScreen'
import LoginScreen from './screen/LoginScreen'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import SignupScreen from './screen/SignupScreen'

function App() {
    return (     
        <BrowserRouter>          
            <Routes>
                <Route path='/' element={<DiaryScreen/>}/>
                <Route path='login' element={<LoginScreen/>}/>
                <Route path='signup' element={<SignupScreen/>}/>
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

export default App