import React from 'react';
 
const blueMode = true;
const RenderListItems = props => {
  return props.items.map((item, index) => {
    return <li key={index}>{item}</li>;
  });
}

const Greetings = props => (
  <div>
    <h1>Hello World</h1>
    <p>Hi my name is { blueMode ? props.name : 'Emmanuel'}</p>
    <p>{props.lastName}</p>
    <ul>
      <p>My favorite things to do in quarantine</p>
      <RenderListItems items={["bad boys", "extraction","the mechanic"]}/>
      <p>My favorite movies</p>

    </ul>
  </div>
);


const App = props =>  (
   
     
    
     <div className="colorBlue" style = {{ fontSize: '40px', backgroundColor: blueMode? 'blue':'green'}}>

<Greetings firstName={props.firstName} lastName={props.lastName}/>
 
     </div>
    
  );


export default App;
