import React from 'react';

const Person =(props)=>{
    return(
        <div className="tc b--gray grow ma3 pa3 ba bg-washed-green  ">
            <h1 onClick={props.clicked}>My name is {props.name}, my age is {props.age}</h1>
            Enter name to change:<input type="text" onChange={props.change}></input>
        </div>
    );
}
export default Person;