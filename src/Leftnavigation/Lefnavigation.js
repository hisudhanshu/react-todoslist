import React from "react";

function Leftnavigation(props) {
  const divStyle = {
    width: 200,
  };
  return (
    <div>
      <div className="card" style={divStyle}>
        <img src="logo512.png" className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{props.skill}</h5>
          <p className="card-text">{props.desc}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Leftnavigation;
