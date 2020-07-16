import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layouts/SearchBar';
import AddBtn from './components/layouts/AddBtn';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar></SearchBar>
      <div className='container'>
        <AddBtn></AddBtn>
        <AddLogModal></AddLogModal>
        <Logs></Logs>
      </div>
    </Fragment>
  );
};

export default App;
