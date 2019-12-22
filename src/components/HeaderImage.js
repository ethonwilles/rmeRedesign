import React from "react";

const HeaderImage = props => {
  return (
    <div className="headerPic">
      <img className="headerImg" src={props.headerPic} />
    </div>
  );
};
export default HeaderImage;
