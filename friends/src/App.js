import React from "react";
import FriendsList from "./components/FriendsList";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <FriendsList />
    </div>
  );
}

export default App;
