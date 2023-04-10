import React,{useState} from 'react';
import PropTypes from 'prop-types';

const GreetingFunctional = (props) => {
    //useState
    const [age, setAge] = useState(21);
    const birthday=()=>{
        setAge(age+1);
    }
  return (
    <div>
        <h1>Hello, {props.name}. This is a Functional Component</h1>
        <h2>Your age is: {age}</h2>
        <button onClick={birthday}>Happy BirthDay :D</button>
    </div>
  )
}

GreetingFunctional.propTypes = {
    name: PropTypes.string,
}

export default GreetingFunctional