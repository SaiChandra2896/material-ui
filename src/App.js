import React from 'react';
import Header from './components/ui/Header';
import {  ThemeProvider } from '@material-ui/styles';
import theme from './components/ui/Theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Header/>
      Hello!
      </ThemeProvider>
  );
}

export default App;
