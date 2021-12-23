import React, { Component } from 'react';
import Result from './Result';
class Abridge extends Component {
  showAbridge = () => {
    const { brand, year, plan } = this.props.data;
    if (!brand || !year) {
      return null;
    }
    return (
      <div className="abridge">
        <h2>Quote Summary</h2>
        <li>Brand: {brand}</li>
        <li>Brand: {year}</li>
        <li>Plan: {plan}</li>
      </div>
    );
  };
  render() {
    return (
      <div>
        {this.showAbridge()}
        <Result result={this.props.result} />
      </div>
    );
  }
}
export default Abridge;
