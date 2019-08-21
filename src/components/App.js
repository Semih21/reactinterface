import React, { Component } from "react";
import "../css/App.css";
import AddAppointments from "./AddAppointments";
import SearchAppointments from "./SearchAppointments";
import ListAppointments from "./ListAppointments";

class App extends Component {
  constructor() {
    super();
    this.state = {
      myAppointments: [],
      lastIndex: 0
    };
  }

  componentDidMount() {
    fetch("./data.json")
      .then(response => response.json())
      .then(data => {
        const apis = data.map(item => {
          item.aptId = this.state.lastIndex + 1;
          this.setState({
            lastIndex: this.state.lastIndex + 1
          });
          return item;
        });
        this.setState({
          myAppointments: apis
        });
      });
  }

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddAppointments />
                <SearchAppointments />
                <ListAppointments appointments={this.state.myAppointments} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
