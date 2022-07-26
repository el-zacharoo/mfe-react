import React, { Suspense } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import theme from 'components/theme';
import Skeleton from 'components/Skeleton';
import Viewport from 'components/Viewport';

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Viewport >
          <Suspense fallback={<Skeleton visible />}>
            <Routes>
              <Route exact path="/" element={<View />} />
              <Route exact path="/preview" element={<Preview />} />
            </Routes>
          </Suspense>
        </Viewport >
      </Router>
    </ThemeProvider>
  )
}

export default App

const View = () => {
  return (
    <h1>
      Hello There
    </h1>

  )
}

const Preview = () => {
  return (
    <h1>
      Hello Preview
    </h1>

  )
}
