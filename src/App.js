import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layouts/SearchBar';
import Logs from './components/logs/Logs';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
