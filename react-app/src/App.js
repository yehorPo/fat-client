import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render (){
    return(
      <div>
      <nav className="navbar navbar-expand navbar-dark bg-danger">
        <a href="/posts" className="navbar-brand">
          Home
        </a>
        <div className="navbar-nav mr-auto">
          <li className="nav-item">
            {/* <Link to={"/posts"} className="nav-link">
              Posts
            </Link> */}
          </li>
          <li className="nav-item">
            {/* <Link to={"/add"} className="nav-link">
              Add
            </Link> */}
          </li>
        </div>
      </nav>

      <div className="container mt-3">
        {/* <Switch>
          <Route exact path={["/", "/posts"]} component={PostList} />
          <Route exact path="/add" component={AddPost} />
          <Route path="/posts/:id" component={Post} />
        </Switch> */}
      </div>
    </div>
    );
  }
}

export default App;
