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
      modalIsOpen: false
    };

    this.addExpense = this.addExpense.bind(this);
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  addExpense() {
    return (
      <div className="ui container">
        <div class="ui labeled input">
          <div class="ui label">$</div>
          <input type="text" placeholder="Enter Amount" />
        </div>

        <div class="ui search selection dropdown">
          <i class="world icon"></i>
          <span class="text">Select Category</span>
          <div class="menu">
            <div class="item">Entertainment</div>
            <div class="item">Grocery</div>
            <div class="item">Bills</div>
            <div class="item">Car</div>
            <div class="item">Clothes</div>
            <div class="item">Communications</div>
            <div class="item">Eating Out</div>
            <div class="item">Food</div>
            <div class="item">Gifts</div>
          </div>
        </div>

        <select class="ui search selection dropdown" id="search-select">
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
      <div className="ui container">
        <div className="ui secondary red raised middle aligned center aligned grid text container segment">
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
              <i className="cart icon"></i>
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
