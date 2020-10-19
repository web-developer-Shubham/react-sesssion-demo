import React, { Component } from "react";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      text: "User text",
    };
  }
  inputChange = (e) => {
    // this.setState({ text: e.target.value });

    if (e.target.value) {
      this.setState({ text: e.target.value });
    } else {
      this.setState({ text: "user text" });
    }
  };
  render() {
    return (
      <div>
        <center>
          <h1>React Session- Demo </h1>

          <input
            type="text"
            placeholder="type anything ex: abcd123"
            onChange={this.inputChange.bind(this)}
          />

          <p>{this.state.text}</p>
        </center>
        <br />
        <hr />
      </div>
    );
  }
}

export default Header;
