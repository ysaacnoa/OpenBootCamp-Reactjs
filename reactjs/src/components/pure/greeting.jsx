import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state={
            age:21
        }
    }
    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>Your age is: {this.state.age}</h2>
                <button onClick={this.birthdate}>Happy BirthDay :D</button>
            </div>
        );
    }
    birthdate =()=>{
        this.setState((prevState)=>(
            {
                age: prevState.age+1
            }
        ));
    }
}


Greeting.propTypes = {
    name: PropTypes.string,
};


export default Greeting;
