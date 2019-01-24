import React, { Component } from "react";
import Schedule from "./Components/Schedule";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="flex flex-column justify-center">
        <div className="tc">
          <h1>React Scheduler</h1>
          <p>
            Select a time slot to book. Confirm your time by clicking the
            "Schedule" Button. Unavaible time slots are in red.
          </p>
        </div>

        <Schedule>9:00 AM - 10:00 AM</Schedule>
        <Schedule>10:00 AM - 11:00 AM</Schedule>
        <Schedule>11:00 AM - 12:00 PM</Schedule>
        <Schedule>12:00 PM - 1:00 PM</Schedule>
        <Schedule> 1:00 PM - 2:00 PM </Schedule>
        <Schedule> 2:00 PM - 3:00 PM </Schedule>
        <Schedule> 3:00 PM - 4:00 PM </Schedule>
        <Schedule> 4:00 PM - 5:00 PM </Schedule>
      </div>
    );
  }
}

export default App;
