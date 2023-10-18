import React from "react";
import sadGroot from "../../images/sad-groot.png";

const EmptyFavs = () => {
  return (
    <div className="empty-favs">
      <h2>You Have No favourites</h2>
      <img src={sadGroot} alt="sad-groot" />
    </div>
  );
};

export default EmptyFavs;
