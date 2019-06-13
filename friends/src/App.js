import React from "react";
import FriendsList from "./components/FriendsList";
import { Route, NavLink } from "react-router-dom";
import NewFriendForm from "./components/NewFriendForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <ul className="navbar">
        <li>
          <NavLink exact to="/" activeClassName="activeNavButton">
            Friends List
          </NavLink>
        </li>
        <li>
          <NavLink to="/add-friend" activeClassName="activeNavButton">
            Add New Friend
          </NavLink>
        </li>
      </ul>
      <Route exact path="/" component={FriendsList} />
      <Route exact path="/add-friend" render={props => <NewFriendForm />} />
    </div>
  );
}

export default App;

// {...props} avengers={avengers}
