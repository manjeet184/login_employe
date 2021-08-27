import { Button } from '@material-ui/core'
import React from 'react'
import Post from './Post'

const Home = ({ handleLogout, userId }) => {
  return (
    <div className="App">
      <h2> Welcome in Firebase account </h2>
      {/* <Post userId={userId} /> */}
      <Button
        onClick={handleLogout}
        variant="contained"
        style={{ marginTop: '60px' }}
      >
        Logout
      </Button>
    </div>
  )
}
export default Home
