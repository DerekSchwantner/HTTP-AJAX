import React from "react";

const FriendCard = props => {
  return (
    <div>
      <div className="friend-info-wrapper">
        <h1>{props.friend.name}</h1>
        <h4>{props.friend.age}</h4>
        <h4>{props.friend.email}</h4>
      </div>
    </div>
  );
};

export default FriendCard;
