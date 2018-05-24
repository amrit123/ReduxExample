import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from "react-redux";
import store from "./store";


import Posts from "./components/Posts"
import PostItems from "./components/PostItems"



class App extends Component {
  render() {
    return (
      //the components should be placed inside providers. the provider takes the current states from the store and pass it to components via containers. store is the single js object that hold the current state of all the components
      <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          </header>
         <PostItems/>
         <hr/>
         <Posts />
      </div>
      </Provider>
    );
  }
}

export default App;
