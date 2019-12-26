import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

export default class Expense extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      time: ""
    };

    this.addExpense = this.addExpense.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  addExpense() {
    return (
      <div className="ui container">
        
        <div>
          <b>{this.state.time}</b>
        </div>
        <div class="ui fluid labeled input">
          <div class="ui label">$</div>
          <input type="text" placeholder="Enter Amount" />
        </div>

        <select class="ui fluid search selection dropdown" id="search-select">
          <option value="">Select Category</option>

          <option value="AL">Entertainment</option>
          <option value="AK">Bills</option>
          <option value="AZ">Car</option>
          <option value="AR">Clothes</option>
          <option value="CA">Communications</option>
          <option value="OH">Eating Out</option>
          <option value="OK">Food</option>
          <option value="OR">Gifts</option>
        </select>

        <div class="ui fluid left corner labeled input">
          <input type="text" placeholder="Notes" />
          <div class="ui left corner label">
            <i class="asterisk icon"></i>
          </div>
        </div>

        <div className="ui left action input">
          <button
            className="ui teal labeled icon button"
            onClick={this.openModal}
          >
            <i className="plus circle icon"></i>
            Save
          </button>
        </div>
      </div>
    );
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    //this.subtitle.style.color = "#f00";
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    return (
      <div className="ui fluid container">
        <div className="ui fluid secondary red raised middle aligned center aligned grid text container segment">
          <h2 class="ui center aligned icon header">
            <i class="money bill alternate icon"></i>
            Expenses
          </h2>
          <div class="ui section divider"></div>

          <table class="ui selectable inverted celled striped table">
            <thead>
              <tr>
                <th colspan="3">My Previous Expenses</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="collapsing">
                  <i class="dollar sign icon"></i> Entertainment
                </td>
                <td>$51.34</td>
                <td class="right aligned collapsing">10 hours ago</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <i class="dollar sign icon"></i> Entertainment
                </td>
                <td>$51.34</td>
                <td class="right aligned collapsing">10 hours ago</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <i class="dollar sign icon"></i> Entertainment
                </td>
                <td>$51.34</td>
                <td class="right aligned collapsing">10 hours ago</td>
              </tr>
              <tr>
                <td class="collapsing">
                  <i class="dollar sign icon"></i> Entertainment
                </td>
                <td>$51.34</td>
                <td class="right aligned collapsing">10 hours ago</td>
              </tr>
            </tbody>
          </table>

          <div class="ui section divider"></div>

          <div className="ui left action input">
            <button
              className="ui teal labeled icon button"
              onClick={this.openModal}
            >
              <i className="plus circle icon"></i>
              Add New Expense
            </button>
          </div>
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div className="ui left action input">
              <button
                className="ui teal labeled icon button"
                onClick={this.closeModal}
              >
                <i className="window close icon"></i>
                Close
              </button>
            </div>
            {this.addExpense()}
          </Modal>
        </div>
      </div>
    );
  }
}
