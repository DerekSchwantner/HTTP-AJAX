import React from "react";

const FriendCard = props => {
  return (
    <div>
      <div className="friend-info-wrapper">
        <h1>{props.friend.name}</h1>
        <p>
          <strong>Age: </strong>
          {props.friend.age}
        </p>
        <p>
          <strong>Email: </strong>
          {props.friend.email}
        </p>
      </div>
    </div>
  );
};

export default FriendCard;
