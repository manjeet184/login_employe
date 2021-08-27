import {
  Box,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from '@material-ui/core'
import { Button } from '@material-ui/core'
import React from 'react'

const Home = ({ handleLogout, data }) => {
  return (
    <div className="App">
      <h2> Welcome Dashboard </h2>
      <Button
        onClick={handleLogout}
        variant="contained"
        style={{ marginTop: '10px' }}
      >
        Logout
      </Button>
      <Box>
        <div style={{ maxWidth: '40vh' }}>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>
                    <h3>All Employe</h3>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.length > 0 &&
                  data.map((list, index) => (
                    <TableRow key={index}>
                      <TableCell align="inherit">{list && index + 1}</TableCell>
                      <TableCell align="left">{list.login}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  )
}
export default Home
