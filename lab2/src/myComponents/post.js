import React from "react";
import "./style.css";
function Post({ name = "", image = "" }) {
  return (
    <div className="postcontiner">
      <img src={image} width={350} height={350} alt="" />
      <h4>{name}</h4>
    </div>
  );
}

export default Post;
