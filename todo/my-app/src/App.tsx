import React from 'react';
import './App.css';
import Router from './router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ThemeSwitcherProvider } from "react-css-theme-switcher";
function App() {
  const currThemes = {
    dark: `${process.env.PUBLIC_URL}/antd.dark-theme.css`,
    light: `${process.env.PUBLIC_URL}/antd.light-theme.css`,
  };
  return (
    <div className="App">
      <ThemeSwitcherProvider themeMap={currThemes} defaultTheme="light">
        <Router />
        <ToastContainer />
      </ThemeSwitcherProvider>
    </div>
  );
}

export default App;
