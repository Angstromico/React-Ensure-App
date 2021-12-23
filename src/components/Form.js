import React, { Component } from 'react';
let type = 'expensed';
class Form extends Component {
  //Ref are for Reading the Values of Fields
  brandRef = React.createRef();
  yearRef = React.createRef();
  basicRef = React.createRef();
  totalRef = React.createRef();
  constructor(props) {
    super(props);
    this.state = {
      basicValue: 'basic',
      totalValue: 'total',
    };
  }

  basicOrTotal = (e) => {
    const value = e.target.value;
    type = value;
    return type;
  };

  handle = (e) => {
    e.preventDefault();
    const brand = this.brandRef.current.value;
    const year = this.yearRef.current.value;

    const plan = type === 'basic' ? 'Basic' : 'Complete Plan';
    const infoCart = {
      brand,
      year,
      plan,
    };
    //Send to the App.js
    this.props.quoteEnsure(infoCart);
    //Reset Form
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className="cart-quote" onSubmit={this.handle}>
        <div className="field">
          <label>Brand:</label>
          <select name="brand" ref={this.brandRef}>
            <option value="american">American</option>
            <option value="european">European</option>
            <option value="asian">Asian</option>
          </select>
        </div>

        <div className="field">
          <label>Year:</label>
          <select name="year" ref={this.yearRef}>
            <option value="2018">2018</option>
            <option value="2017">2017</option>
            <option value="2016">2016</option>
            <option value="2015">2015</option>
            <option value="2014">2014</option>
            <option value="2013">2013</option>
            <option value="2012">2012</option>
            <option value="2011">2011</option>
            <option value="2010">2010</option>
            <option value="2009">2009</option>
            <option value="2008">2008</option>
          </select>
        </div>
        <div className="field">
          <label>Plan:</label>
          <input
            type="radio"
            ref={this.basicRef}
            name="plan"
            value={this.state.basicValue}
            onClick={this.basicOrTotal}
          />{' '}
          Basic
          <input
            type="radio"
            ref={this.totalRef}
            name="plan"
            value={this.state.totalValue}
            onClick={this.basicOrTotal}
          />{' '}
          Total
        </div>

        <button type="submit" className="btn">
          Quote
        </button>
      </form>
    );
  }
}
export default Form;
