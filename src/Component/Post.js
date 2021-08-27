import React, { useEffect } from 'react'
import { useState } from 'react'
// import { CKEditor } from '@ckeditor/ckeditor5-react'
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { Button, Grid, Paper, Box, Container } from '@material-ui/core'
// import ReactHtmlParse from 'react-html-parser'
// import fire from './fire'

const Post = ({ userId }) => {
  const [value, setValue] = useState('')
  const handeleditor = (e, editor) => {
    setValue(editor.getData())
  }

  const handlePost = (e) => {
    e.preventDefault()
    createPost(userId)
  }

  const createPost = (userId) => {
    // fire.database().ref().child(userId).push(value)
  }
  return (
    <>
      <div className="postcss">
        <h2>Your Post Feed</h2>
        <Grid>
          <Paper elevation={10}>
            {/* <CKEditor editor={ClassicEditor} onChange={handeleditor} /> */}
            <Button
              onClick={(e) => handlePost(e)}
              size="small"
              color="secondary"
              variant="contained"
              style={{ margin: '5px' }}
            >
              Post
            </Button>
          </Paper>
        </Grid>
      </div>
      <div>
        <Container maxWidth="sm">
          <Grid>
            <Paper elevation={10}>
              {/* <Box>{ReactHtmlParse(value)}</Box> */}
            </Paper>
          </Grid>
        </Container>
      </div>
    </>
  )
}

export default Post
