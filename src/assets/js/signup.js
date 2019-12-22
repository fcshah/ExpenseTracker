import React from "react";

const SignUpForm = props => {
  function submitSignUp() {
    console.log("Sign Up was clicked");
  }

  return (
    <div className="ui container">
      <div class="ui secondary red raised middle aligned center aligned grid text container segment">
        <div class="column">
          <h2 className="ui blue image header">
            <div className="content">Create your account</div>
          </h2>
          <form className="ui large form">
            <div className="ui stacked segment">
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="fname" placeholder="First Name" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="lname" placeholder="Last Name" />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="E-mail address"
                  />
                </div>
              </div>
              <div className="field">
                <div className="ui left icon input">
                  <i className="user icon"></i>
                  <input type="text" name="phone" placeholder="Phone Number" />
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
              <div className="field">
                <div className="ui left icon input">
                  <i className="lock icon"></i>
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                  />
                </div>
              </div>
              <div
                className="ui fluid large blue submit button"
                onClick={submitSignUp()}
              >
                Sign Up
              </div>
            </div>

            <div className="ui error message"></div>
          </form>

          <div className="ui message">
            Already a User? <a href="/">Log In</a>
          </div>
          <div className="ui message">
            <a href="/dashboard">Continue as a Guest User</a>
          </div>
        </div>
      </div>
    </div>
  );
};

SignUpForm.defaultProps = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
  password: "",
  errorMessage: ""
};

export default SignUpForm;
