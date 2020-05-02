import React,{Component} from 'react';
import Person from './Person/Person.js';
import Radium from 'radium';

class App extends Component {
  state = { 
    people:[
      {id:1,name:"Anirudh",age:20},
      {id:2,name:"Krishna",age:30},
      {id:3,name:"Rahul",age:40}
    ],  
    hide:false
}


inputchangeHandler=(event,id)=>{
  const pIndex=this.state.people.findIndex(p=>{
    return p.id===id;
  });

  const fetchedperson={
    ...this.state.people[pIndex]
  };

  fetchedperson.name=event.target.value;

  const people=[...this.state.people];
  people[pIndex]=fetchedperson;

  this.setState({people:people})
}
hidecontentHandler=()=>{
  const temp=this.state.hide
  this.setState({
    hide:!temp
  })
}

deletepersonHandler=(Indexpassed)=>{
  //this way not good const x=this.state.people;
  const x=[...this.state.people]
  x.splice(Indexpassed,1);
  this.setState({people:x})
}
//we return the function namechangeHandler in line 30 
  render(){ 

    let persons=null;

    if(this.state.hide){
      persons=(
        <div>
          {this.state.people.map((argum,index)=>{
            return <Person 
            clicked={()=>this.deletepersonHandler(index)}
            name={argum.name} 
            age={argum.age}
            key={argum.id}
            change={(event)=>this.inputchangeHandler(event,argum.id)}/>
          })}
        </div>
        
      );
    }
    
      return ( 
        <div className="tc">
          <h1>This is a react app </h1>
          <button onClick={this.hidecontentHandler} className="pa2 ma2 dim grow pointer">Hide</button> 
          {persons}
          
          
        </div>
       );
  }
}

export default Radium(App);
