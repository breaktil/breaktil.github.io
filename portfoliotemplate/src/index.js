import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import AboutPage from 'pages/AboutPage/AboutPage';
import PortfolioPage from 'pages/PortfolioPage/PortfolioPage';
import ContactPage from 'pages/ContactPage/ContactPage';
import { MuiTheme } from 'assets/theme';
import { createTheme, MuiThemeProvider, } from '@material-ui/core';

const theme = createTheme(MuiTheme);

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Router>
      <Switch>
        <Route exact path={'/'} component={HomePage}/>
        <Route exact path={'/about'} component={AboutPage}/>
        <Route exact path={'/portfolio'} component={PortfolioPage}/>
        <Route exact path={'/contact'} component={ContactPage}/>
        <Redirect to={'/'}/>
      </Switch>
    </Router>
  </MuiThemeProvider>,
  document.getElementById('root')
);
