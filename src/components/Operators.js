import React, {Component} from 'react';
import {connect} from 'react-redux';
import {calculateSum} from '../actions/action';

class Operators extends Component {
  constructor(props) {
    super(props);
    this.state = {
        firstValue: '',
        secondValue: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = () => {
    const {firstValue, secondValue} = this.state;
    const value1 = Number(firstValue);
    const value2 = Number(secondValue);
    this.props.calculateSum(value1,  value2);
  }

  render() {
    return (
      <div>
        <input className="value" type="text" name="firstValue" onChange={e => this.handleChange(e)} value={this.state.firstValue} />
        <h3 className="value">+</h3>
        <input className="value" type="text" name="secondValue" onChange={e => this.handleChange(e)} value={this.state.secondValue} />
        <button className="sum-button" onClick={this.handleClick}>Calculate Sum</button>
        <h4 className="align-items">The sum is: {this.props.sum}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(".. inside mapStateToProps > Operators");
  return {
    sum: state.sum
  }
}

const mapDispatchToProps = (dispatch) => {
  console.log(".. inside mapDispatchToProps > Operators");
  return {
    calculateSum: (firstValue, secondValue) => dispatch(calculateSum(firstValue, secondValue))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Operators);
