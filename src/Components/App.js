import React from 'react';
import Form from '../Components/Form/Form';
import './App.css';
import axios from 'axios';




axios.get('http://localhost:4040')
  .then(response => {
    console.log(response);
  });

function App() {
  return (
    <div>
      <Form />
    </div>
  );
}

export default App;
