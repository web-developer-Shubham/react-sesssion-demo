import React from "react";
import Header from "./header";
import Footer from "./footer";

const Home = (props) => {
  return (
    <div>
      <Header />
      <center>
        <h3>Basic Example</h3>
        <p>Training on React Course</p>
        <Footer year="2020" month="October" />
      </center>
    </div>
  );
};
export default Home;
