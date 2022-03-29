import React from 'react'
import {Button, TextField, Link, Grid, Container, Typography} from '@material-ui/core'
import {signup} from '../config/api-service'

function SignupScreen () {
    const onSubmit = e => {
        e.preventDefault()
        const data = new FormData(e.target)
        const userName = data.get('userName')
        const email = data.get('email')
        const password = data.get('password')

        signup({
            userName,
            email,
            password
        }).then(() => {
            window.location.href = '/login'
        })
    }

    return (
        <Container component='main' maxWidth='xs' style={{marginTop: '8%'}}>
            <form noValidate onSubmit={onSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography component='h1' variant='h5'>계정 생성</Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            autoComplete='fname'
                            name='userName'
                            variant='outlined'
                            required
                            fullWidth
                            id='userName'
                            label='사용자명'
                            autoFocus/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='이메일 주소'
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
                            계정 생성
                        </Button>
                    </Grid>
                </Grid>
                <Grid container justifyContent='flex-end'>
                    <Grid item>
                        <Link href='login' variant='body2'> {/* href 는 router path 값이다. */}
                            이미 계정이 있으면, 로그인 하세요.
                        </Link>
                    </Grid>
                </Grid>           
            </form>
        </Container>
    )
}

export default SignupScreen