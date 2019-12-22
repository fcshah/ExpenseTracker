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

Modal.setAppElement("#root");

const Dashboard = props => {
  this.openModal = this.openModal.bind(this);
  this.afterOpenModal = this.afterOpenModal.bind(this);
  this.closeModal = this.closeModal.bind(this);

  function openModal() {
    this.setState({ modalIsOpen: true });
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = "#f00";
  }

  function closeModal() {
    this.setState({ modalIsOpen: false });
  }

  return (
    <div class="ui secondary vertical pointing menu">
      <a class="active item">
        Expenses
        <div class="ui left pointing label">1</div>
      </a>
      <a class="item">
        Incomes
        <div class="ui label">51</div>
      </a>
      <a class="item">
        Accounts
        <div class="ui label">1</div>
      </a>
      <div class="item">
        <div class="ui transparent icon input">
          <input type="text" placeholder="Search trasactions..." />
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  );
};

Dashboard.defaultProps = {
  modalIsOpen: false
};

export default Dashboard;
