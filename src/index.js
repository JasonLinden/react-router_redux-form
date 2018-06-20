import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from "redux-promise";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import reducers from './reducers';

import PostsIndex from "./components/post-index";
import PostsNew from "./components/posts-new";
import PostsShow from "./components/posts-show";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

// Move most specific route to the top of the switch list
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>          
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/posts/:id" component={PostsShow} />
          <Route path="/" component={PostsIndex} />
        </ Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
