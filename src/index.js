import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import elliot from "./img/elliot.jpg";

class App extends React.Component {
  //state = {};

  //componentDidMount() {}

  renderContent() {
    return (
      <div className="ui container">
        <div className="ui raised middle aligned center aligned grid text container segment">
          <div className="column">
            <div className="ui fluid card">
              <div className="content">
                <div className="center aligned header">Finance Tracker</div>
                <div className="center aligned description">
                  <p>The best finance tracking App ever</p>
                </div>
              </div>
              <div className="extra content">
                <div className="center aligned author">
                  <img className="ui avatar image" src={elliot}></img>
                </div>
              </div>
            </div>

            <h2 className="ui blue image header">
              <div className="content">Log-in to your account</div>
            </h2>
            <form className="ui large form">
              <div className="ui stacked segment">
                <div className="field">
                  <div className="ui left icon input">
                    <i className="user icon"></i>
                    <input
                      type="text"
                      name="email"
                      placeholder="E-mail address"
                    />
                  </div>
                </div>
                <div className="field">
                  <div className="ui left icon input">
                    <i className="lock icon"></i>
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                    />
                  </div>
                </div>
                <div className="ui fluid large blue submit button">Login</div>
              </div>

              <div className="ui error message"></div>
            </form>

            <div className="ui message">
              New to us? <a href="#">Sign Up</a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
