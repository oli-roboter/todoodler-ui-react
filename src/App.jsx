import React from 'react';
import './assets/css/layout.css';
import RoundButton from './components/features/buttons/RoundButton';

const App = () => (
  <div className="app_container">
    App
    <div className="navbar_container"><RoundButton text="Navbar" /></div>
    <div className="sidebar_container">SideMenu</div>
  </div>
);

export default App;
