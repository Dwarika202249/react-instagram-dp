import React from "react";

const ImageBox = ({ img, followers, following, bio }) => {
  return (
    <div>
      <p>😎 We found it!</p>
      <a target={"_blank"} href={img}>
        <p><b>Bio: </b>{bio}</p>
        <p><b>Followers: </b>{followers} | <b>Following: </b>{following}</p>
        <div>
          <img alt={"instagram dp"} src={img} />
        </div>
        🙄 View In full size
      </a>
    </div>
  );
}

export default ImageBox;