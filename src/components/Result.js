import React, { Component } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
class Result extends Component {
  render() {
    const result = this.props.result;
    const roundedResult = parseFloat(result).toFixed();
    const message = !result
      ? 'Choose brand, year and type of insurance'
      : `Car Insurance Cost: ${roundedResult} $`;
    return (
      <div className="great-total">
        <TransitionGroup component="span" className="result">
          <CSSTransition
            className="result"
            key={result}
            timeout={{ enter: 800, exit: 800 }}
          >
            <span>{message} </span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default Result;
