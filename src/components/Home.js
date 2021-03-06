import React, { Component } from "react";

import firebase from "firebase";

import "./css/home.css";

class Home extends Component {
  componentDidMount() {
    this.props.get_user(firebase.auth().currentUser.email);
  }

  render() {
    return (
      <div>
        <div className="welcome-message">
          <h1>Hey {firebase.auth().currentUser.displayName}!</h1>
          <h2>Welcome to Fnplus Community</h2>
          <h4>
            <a href="#/signup">Sign up</a> with our news service to get started
          </h4>
        </div>
      </div>
    );
  }
}

export default Home;
