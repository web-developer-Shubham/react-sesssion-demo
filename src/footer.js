import React from "react";

const Footer = (props) => {
  return (
    <div>
      <br />
      <hr />
      <center>
        {" "}
        &copy; {props.year} {props.month} --UI Academy- TCS Interactive
      </center>
    </div>
  );
};
export default Footer;
