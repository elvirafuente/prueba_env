import React from 'react';


function App() {

  console.log(process.env.NODE_ENV)

  return (
    <div className="App">
        <h1> Prueba {process.env.NODE_ENV}</h1>
    </div>
  );
}

export default App;
