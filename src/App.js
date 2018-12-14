import React, { Component } from 'react';
import Routes from './routes';


import Header from './components/Header';

import "./styles.css"

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//        <h1>hello word</h1>
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="App">
    <Header />
    <Routes />
  </div>
);

export default App;
