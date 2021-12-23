import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Abridge from './Abridge';

class App extends Component {
  state = {
    result: '',
    data: {},
  };
  getDeltaYear = (year) => {
    return new Date().getFullYear() - year;
  };
  brandCalculation = (brand) => {
    let increment;
    switch (brand) {
      case 'european':
        increment = 1.3;
        break;
      case 'american':
        increment = 1.15;
        break;
      case 'asian':
        increment = 1.05;
        break;
      default:
        break;
    }
    return increment;
  };
  getPlan = (plan) => {
    console.log(plan);
    return plan === 'Basic' ? 1.2 : 1.5;
  };
  quoteEnsure = (data) => {
    const { brand, year, plan } = data;
    //Base Price
    let result = 2000;
    //Obtain Year Differencial
    const differential = this.getDeltaYear(year);
    //Subtract 3% from the value for each year
    let tripleDifferential = differential * 3;
    result -= (tripleDifferential * result) / 100;

    //Tax Acording the Brand
    result = this.brandCalculation(brand) * result;
    //Basic 20% and Total 50%
    result *= this.getPlan(plan);
    //Creat Object for infrmation of Car
    const info = {
      brand,
      year,
      plan,
    };
    console.log(result);
    //Add Result to Main State
    this.setState({
      result,
      data: info,
    });
  };

  render() {
    return (
      <div className="container">
        <Header title="Auto Insurance Quote" />
        <div className="form-container">
          <Form quoteEnsure={this.quoteEnsure} />
          <Abridge data={this.state.data} result={this.state.result} />
        </div>
      </div>
    );
  }
}
export default App;
