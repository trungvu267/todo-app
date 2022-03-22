import { useEffect, useState } from 'react';
import './App.scss';

import Header from './components/header/Header';
import Main from './components/main/Main';

import { ThemeContext } from './config/context';
import { useLocalStorage } from './config/useLocalStorage';

function App() {

  const [initTheme, setInitTheme] = useLocalStorage('theme',false) 
  const [darkTheme, setDarkTheme] = useState(initTheme)
  const darkThemeClass = darkTheme ? 'App__dark-theme' : ''

  useEffect(()=>{
    setInitTheme(darkTheme)
  },[darkTheme])
  return (
    <ThemeContext.Provider value = {{darkTheme,setDarkTheme}}>
      <div className={`App ${darkThemeClass}`}>
        <Header />
        <Main />  
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
