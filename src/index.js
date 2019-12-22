import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import HomeCard from "./assets/js/card";
import LoginForm from "./assets/js/login";

class App extends React.Component {
  state = {};

  //componentDidMount() {}

  // renderContent() {
  // }

  render() {
    return (
      <div className="ui container">
        <div className="ui secondary red raised middle aligned center aligned grid text container segment">
          <div className="column">
            <HomeCard />

            <LoginForm />
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
