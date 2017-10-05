import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./css/font-awesome/css/font-awesome.css";
import "./css/AdminLTE/dist/css/AdminLTE.css";
import "./css/AdminLTE/dist/css/skins/_all-skins.css";
import "./css/crmcustom.css";
import "./css/treechart.css";

import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
   <App/>, document.getElementById('root'));

registerServiceWorker();