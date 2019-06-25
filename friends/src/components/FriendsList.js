import React from "react";
import { Link } from "react-router-dom";
// import FriendCard from "./FriendCard";

const FriendsList = props => {
  return (
    <div className="friends-container">
      <h1>Friends</h1>
      {props.friends.map(friend => {
        return (
          <Link className="link" to={`/${friend.id}`} key={friend.id}>
            {/* <div className="friend-card">
              <FriendCard friend={friend} />
            </div> */}
            <div className="friend-card">
              <div className="friend-info-wrapper">
                <h1>{friend.name}</h1>
                <p>
                  <strong>Age: </strong>
                  {friend.age}
                </p>
                <p>
                  <strong>Email: </strong>
                  {friend.email}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default FriendsList;
