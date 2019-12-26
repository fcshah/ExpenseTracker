import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import Expense from "./expense";

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

Modal.setAppElement("#root");

export default class Dashboard extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
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
        <div className="ui fluid secondary vertical pointing menu">
          <a className="active item" onClick={this.openModal}>
            Expenses
            <div className="ui left pointing label">1</div>
          </a>
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
            <Expense />
          </Modal>
          <a className="item">
            Incomes
            <div className="ui label">51</div>
          </a>
          <a className="item">
            Accounts
            <div className="ui label">1</div>
          </a>
          <div className="item">
            <div className="ui transparent icon input">
              <input type="text" placeholder="Search trasactions..." />
              <i className="search icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
