import React from "react";

const RandomPhoto = ({ photoUrl }) => {
  return (
    <div>
      <img src={photoUrl} alt="Vybraná fotka" />
    </div>
  );
};

export default RandomPhoto;
