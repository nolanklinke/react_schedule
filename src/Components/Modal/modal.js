import React, { Component } from "react";
import "./modal.css";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      phoneNumber: ""
    };
    this.handleName = this.handleName.bind(this);
    this.handlePhone = this.handlePhone.bind(this);
  }

  handleName(event) {
    this.setState({ name: event.target.value });
  }
  handlePhone(event) {
    this.setState({ phoneNumber: event.target.value });
  }

  onClose = event => {
    this.props.onClose && this.props.onClose(event);
  };

  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="modal">
        <div className="modal-main">
          <div className="pa2">
            <h2>Please enter your name and phone number.</h2>
          </div>
          <div>
            <label>Name:</label>
            <br />
            <input
              className="pa1 ma1"
              value={this.state.name}
              onChange={this.handleName}
            />
            <br />
            <label>Phone Number:</label>
            <br />
            <input
              className="pa1 ma1"
              value={this.state.phoneNumber}
              onChange={this.handlePhone}
            />
          </div>
          <a
            href="#0"
            className="f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-green"
            onClick={this.onClose}
          >
            Confirm Time
          </a>
        </div>
      </div>
    );
  }
}

export default Modal;
