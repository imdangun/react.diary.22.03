import React from 'react'
import {Grid, Button, AppBar, Toolbar, Typography} from '@material-ui/core'
import {signout} from '../config/api-service'

function NavBar() {
    return (
        <AppBar position='static'>
            <Toolbar>
                <Grid justifyContent='space-between' container>
                    <Grid item>
                        <Typography variant='h6'>할일</Typography>
                    </Grid>
                    <Grid>
                        <Button color='inherit' onClick={signout}>
                            로그아웃
                        </Button>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar