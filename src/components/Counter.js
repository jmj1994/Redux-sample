import React, {Component} from 'react';
import {connect} from 'react-redux';
import {incrementCount} from '../actions/action';
import Operators from './Operators';

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  handleClick = () => {
    this.props.incrementCount();
  }

  render() {
    return (
      <div className="container">
        <div className="align-items">
          <h4 className="counter-heading">Counter value: {this.props.value}</h4>
          <button onClick={this.handleClick}>Increment</button>
        </div>
        <Operators/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(".. inside mapStateToProps > Counter");
  return {
    value: state.count ? state.count : null
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(".. inside mapDispatchToProps > Counter")
  return {
    incrementCount: () => dispatch(incrementCount())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);
