
import React, { Component } from 'react';
import './style.css';
import CovidForm from './components/CovidForm';
import Display from './components/Display';

class App extends Component {
  state = {
    list: []
  };

  handleSubmit = (
    FirstName,
    LastName,
    IDNumber,
    Address,
    PhoneNumber,
    Temperature,
    radio,
    radio2,
    radio3,
  ) => {

    let obj = {
      FirstName: FirstName,
      LastName: LastName,
      IDNumber: IDNumber,
      Address: Address,
      PhoneNumber: PhoneNumber,
      Temperature: Temperature,
      radio: radio,
      radio2: radio2,
      radio3: radio3,
    };
    
    if (FirstName === "") {
      alert("Please enter FirstName");
    } else if (LastName === "") {
      alert("please fill out form");
    } else if (IDNumber === "") {
      alert("please fill out form");
    } else if (Address === "") {
      alert("please fill out form");
    } else if (PhoneNumber === "") {
      alert("please fill out form");
    } else if (Temperature === "") {
      alert("please fill out form");
    } else {
      this.setState({
        list: [...this.state.list, obj],
      });
    }
  };
  handleDelete = (id) => {
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    });
    console.log(this.state.list);
  };

  render() {
    return (
      <div>
        <CovidForm handleSubmit={this.handleSubmit} />
        <Display data={this.state.list} Delete={this.handleDelete} />
      </div>
    );
  }
}
export default App;
