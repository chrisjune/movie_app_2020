import React from 'react';
function Food({fav, color}){
  return (
    <h3>I love {fav} {color}</h3>
  );
}
function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="kimchi" color="red"/>
    </div>
  );
}

export default App;
