import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './Component/Login'
import Home from './Component/Home.js'
const App = () => {
  let [user, setUser] = useState('')
  let [email, setEmail] = useState('')
  let [password, setPassword] = useState('')
  let [emailError, setEmailError] = useState('')
  let [passwordError, setPasswordError] = useState('')
  let [hasAccount, setHasAccount] = useState(true)
  let [userId, setUserId] = useState('')
  const [data, setData] = useState([])
  const clearInputs = () => {
    setEmail = ''
    setPassword = ''
  }
  const getDetail = async () => {
    await fetch(`https://api.github.com/users`)
      .then((result) => result.json())
      .then((resp) => setData(resp))
  }
  console.log(data, 'api')

  const clearErrors = () => {
    setEmailError = ''
    setPasswordError = ''
  }

  const handleLogin = () => {
    setUser(1)
    getDetail()
  }

  const handlesignup = () => {}

  const handleLogout = () => {
    setUser(0)
    setUserId('')
  }

  const authListener = () => {}
  useEffect(() => {}, [])
  console.log('login', user)
  console.log('logout', user)
  return (
    <div>
      {user ? (
        <Home handleLogout={handleLogout} userId={userId} />
      ) : (
        <Login
          email={email}
          setEmail={setEmail}
          setPassword={setPassword}
          password={password}
          handleLogin={handleLogin}
          handlesignup={handlesignup}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
        />
      )}
    </div>
  )
}
export default App
