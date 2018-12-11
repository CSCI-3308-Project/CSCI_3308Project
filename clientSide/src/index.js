import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';

import "font-awesome/css/font-awesome.min.css";
import "mdbreact/dist/css/mdb.css";
import "./component/css/general.css"

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
