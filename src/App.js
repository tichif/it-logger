import React, { Fragment, useEffect } from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layouts/SearchBar';
import AddBtn from './components/layouts/AddBtn';
import Logs from './components/logs/Logs';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar></SearchBar>
        <div className='container'>
          <AddBtn></AddBtn>
          <AddLogModal></AddLogModal>
          <EditLogModal></EditLogModal>
          <AddTechModal></AddTechModal>
          <TechListModal></TechListModal>
          <Logs></Logs>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
