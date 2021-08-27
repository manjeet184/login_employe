import { Button, TextField, Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'

const Login = (props) => {
  const {
    email,
    setEmail,
    setPassword,
    password,
    handleLogin,
    handlesignup,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
    userId,
  } = props
  const paperCss = {
    padding: 20,
    height: '70vh',
    width: '280px',
    margin: '20px auto',
  }
  return (
    <div className="App">
      <Grid>
        <Paper elevation={10} style={paperCss}>
          <Grid>
            <h2>Log In</h2>
          </Grid>
          <TextField
            label="Username"
            placeholder="Username"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
            style={{ marginTop: 10 }}
          ></TextField>
          <Typography>{emailError}</Typography>
          <TextField
            label="Password"
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            style={{ marginTop: 10 }}
          ></TextField>
          <Typography>{passwordError}</Typography>
          <Grid>
            {hasAccount ? (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleLogin}
                  fullWidth
                  style={{ marginTop: 10 }}
                >
                  Login
                </Button>
                <Typography>
                  Don't have account
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{ marginInline: 10, marginBlock: 10 }}
                  >
                    Sign Up
                  </Button>
                </Typography>
              </>
            ) : (
              <>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handlesignup}
                  fullWidth
                  style={{ marginTop: 10 }}
                >
                  Sign up
                </Button>
                <Typography>
                  Have an account
                  <Button
                    variant="contained"
                    size="small"
                    color="primary"
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{ marginInline: 10, marginBlock: 10 }}
                  >
                    Login
                  </Button>
                </Typography>
              </>
            )}
          </Grid>
          {/* <Typography>Forgot password</Typography> */}
        </Paper>
      </Grid>
    </div>
  )
}

export default Login
