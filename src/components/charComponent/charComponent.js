import React from "react";

const charComp = props => {
  const style = {
    display: "inline-block",
    padding: "16px",
    textAlign: "center",
    border: "1px solid black",
    margin: "16px"
  };

  return <div style={style} onClick={props.clicked}>{props.character}</div>;
};

export default charComp;
