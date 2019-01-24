import React, { Component } from "react";
import Modal from "../Modal";

class Schedule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isBooked: false,
      show: false,
      style: "f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue"
    };
  }

  showModal = event => {
    this.setState({
      show: !this.state.show
    });
  };

  closeModal = event => {
    this.setState({
      show: false,
      style: "f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-blue"
    });
  };

  bookTime = event => {
    this.setState({
      show: false,
      style: "f6 link dim br-pill ph3 pv2 mb2 dib white bg-dark-red"
    });
  };

  render() {
    return (
      <div className="tc dib pa2">
        <a
          href="#0"
          className={this.state.style}
          onClick={event => {
            this.showModal();
          }}
        >
          {this.props.children}
        </a>
        <Modal
          show={this.state.show}
          onClose={this.closeModal}
          onSubmit={this.bookTime}
        />
      </div>
    );
  }
}

export default Schedule;
