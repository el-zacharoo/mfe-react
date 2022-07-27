import React, { Suspense } from 'react';

import { withAuthenticationRequired } from "@auth0/auth0-react";
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Provider } from './Provider';
import { DataFormat } from './DataFormat';

import theme from 'components/theme';
import Skeleton from 'components/Skeleton';
import Viewport from 'components/Viewport';
import MyRoutes from 'routes/MyRoutes'; 

export const App = withAuthenticationRequired(() => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Provider>
          <Viewport >
            <Suspense fallback={<Skeleton visible />}>
              <Routes>
                <Route exact path="/" element={<View />} />
                <Route exact path="/preview" element={<DataFormat />} />
              </Routes>
              <MyRoutes />
            </Suspense>
          </Viewport >
        </Provider>
      </Router>
    </ThemeProvider>
  )
})

export default App

const View = () => {
  return (
    <h1>
      Hello There
    </h1>

  )
}