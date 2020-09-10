// import React from 'react';
// import ReactDOM from 'react-dom';
// import setGlobalStyles from 'styles/globals';
// import * as serviceWorker from './serviceWorker';
// import App from 'components/App';

// setGlobalStyles();

// ReactDOM.render(<App />, document.getElementById('root'));
// // ReactDOM.render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>,
// //   document.getElementById('root')
// // );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app';
import GlobalStyles from 'styles/globals';
import * as serviceWorker from './serviceWorker';
const renderApp = () => {
  ReactDOM.render(
    <div>
      <GlobalStyles />
      <App />
    </div>,
    document.getElementById('root')
  );
};
renderApp();
serviceWorker.unregister();
