import React from "react";
import axios from "axios";
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
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

  render() {
    return (
      <div className="friends-container">
        <h1>Friends</h1>
        <h4>add new friend</h4>
        {this.state.friends.map(friend => {
          return (
            <div key={friend.id} className="friend-card">
              <FriendCard friend={friend} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
