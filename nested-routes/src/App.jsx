import React from 'react';

import Button from '@mui/material/Button';

import { Routes, Route, Link as RouterLink } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route exact path="/home" element={<View />} />
      <Route exact path="/home/nested" element={<ViewFormat />} />
    </Routes>

  )
}

export default App

const View = () => {
  return (
    <>
      <h1>
        Hello this is home
      </h1>
      <Button component={RouterLink} to="/home/nested">
        Click here to view nested page
      </Button>
    </>

  )
}
const ViewFormat = () => {
  return (
    <>
      <h1>
        Hello this is home nested
      </h1>
      <Button component={RouterLink} to="/home">
        Click here to return
      </Button>
    </>

  )
}