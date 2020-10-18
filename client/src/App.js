import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { FormattedMessage } from 'react-intl';
import { useDispatch } from 'react-redux';
import { languages } from './shared/languages';

import { setLocale } from './ducks/il8n';
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const choices = Object.keys(languages);
    let selected = -1;
    const timer = setInterval(() => {
      selected++;
      if (selected === choices.length) {
        selected = 0;
      }
      dispatch(setLocale(choices[selected]));
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <FormattedMessage id='test.message' />
      </header>
    </div>
  );
}

export default App;
