// Styles
import './styles/common.less';

// Package
// import React from 'react';
import ReactDOM from 'react-dom';

// Components
import Routes from './router/routes';

// Scripts
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(Routes, document.getElementById('root'));
registerServiceWorker();
