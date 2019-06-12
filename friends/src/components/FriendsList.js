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
      });
  }

  render() {
    return (
      <div>
        {this.state.friends.map(friend => {
          return (
            <div className="friend-card">
              <FriendCard friend={friend} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default FriendsList;
