import React from "react";

function ToyCard({ toy, onDonate,onLike }) {
  return (
    <div className="card">
      <h2>{toy.name}</h2>
      <img src={toy.image} alt={toy.name} className="toy-avatar" />
      <p>{toy.likes} Likes </p>
      <button className="like-btn" onClick={()=>onLike(toy.id,toy)}>Like {"<3"}</button>
      <button onClick={() => onDonate(toy.id, toy)} className="del-btn">
        Donate to GoodWill
      </button>
    </div>
  );
}

export default ToyCard;
