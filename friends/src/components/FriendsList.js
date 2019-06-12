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
  //   componentDidMount() {
  //     axios
  //       .get("")
  //       .then(res =>
  //         this.setState({
  //           friends: res.data.message
  //         })
  //       )
  //       .catch(err => console.log(err));
  //   }
  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        <FriendCard />
      </div>
    );
  }
}

export default FriendsList;
