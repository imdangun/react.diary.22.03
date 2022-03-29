import React from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import {Container} from '@material-ui/core'
import {signin} from '../config/api-service'
import {Link} from '@material-ui/core'

function LoginScreen() {
    const onSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        const email = data.get('email')
        const password = data.get('password')
        signin({email: email, password: password})
    }

    return (
        <Container component='main' maxWidth='xs' style={{marginTop: '8%'}}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Typography component='h1' variant='h5'>
                        로그인
                    </Typography>
                </Grid>
            </Grid>
            <form noValidate onSubmit={onSubmit}>                
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='이메일'
                            name='email'
                            autoComplete='email'/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            name='password'
                            label='패스워드'
                            type='password'
                            id='password'
                            autoComplete='current-password'/>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type='submit'
                            fullWidth
                            variant='contained'
                            color='primary'>
                            로그인
                        </Button>
                    </Grid>
                    <Link href='signup' variant='body2'>
                        <Grid item>회원가입</Grid>
                    </Link>
                </Grid>
            </form>
        </Container>
    )
}

export default LoginScreen