import React from "react";

const FriendCard = ({ friends, match, deleteFriend, setUpdateForm }) => {
  const { id } = match.params;

  const friend = friends.find(friend => `${friend.id}` === id);

  console.log("rendering Friend: ", friends, friend);
  if (!friend) {
    return <h3>Loading friends...</h3>;
  }

  return (
    <div>
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
      <button
        onClick={e => {
          console.log("Hitting delete button - onClick handler");
          deleteFriend(e, friend.id);
        }}
        className="md-button"
      >
        Delete Friend
      </button>
      <button onClick={e => setUpdateForm(e, friend)} className="md-button">
        Update Friend
      </button>
    </div>
  );
};

export default FriendCard;
