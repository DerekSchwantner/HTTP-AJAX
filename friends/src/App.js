import React from "react";
import FriendsList from "./components/FriendsList";
import { Route, NavLink } from "react-router-dom";
import NewFriendForm from "./components/NewFriendForm";
import axios from "axios";

import "./App.css";
import FriendForm from "./components/NewFriend";
import FriendCard from "./components/FriendCard";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: null,
      error: ""
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log("%c Friends Data", "color: orange; font-weight: bold;");
        console.log(res);
        this.setState({
          friends: res.data
        });
      })
      .catch(err => {
        console.log(err);
        this.setState({
          error: "error"
        });
      });
  }

  addFriend = (e, friend) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/friends", friend)
      .then(res => {
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  updateFriend = (e, friend) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5000/friends/${friend.id}`, friend)
      .then(res => {
        this.setState({
          activeFriend: null,
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  setUpdateForm = (e, friend) => {
    e.preventDefault();
    this.setState({
      activeFriend: friend
    });
    this.props.history.push("/friend-form");
  };

  deleteFriend = (e, id) => {
    e.preventDefault();
    console.log("now in deleteFriend in App");
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        console.log("Data is back, now set state and reroute", res.data);
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
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
          <li>
            <NavLink to="/friend-form">{`${
              this.state.activeFriend ? "Update" : "Add"
            } Friend`}</NavLink>
          </li>
        </ul>
        <Route
          exact
          path="/"
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path="/:id"
          render={props => (
            <FriendCard
              {...props}
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              setUpdateForm={this.setUpdateForm}
            />
          )}
        />
        <Route exact path="/add-friend" render={props => <NewFriendForm />} />
        <Route
          exact
          path="/friend-form"
          render={props => (
            <FriendForm
              {...props}
              activeFriend={this.state.activeFriend}
              addFriend={this.addFriend}
              updateFriend={this.updateFriend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
