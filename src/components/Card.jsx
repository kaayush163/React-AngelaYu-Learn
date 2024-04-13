import React from "react";
import Avatar from "./AVatar";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />

        {/* <img className="circle-img" src={props.img} alt="avatar_img" /> */}
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} />
        <Detail detailInfo={props.email} />
        {/* <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
