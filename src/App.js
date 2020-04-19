import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import cars from "./cars.json"
import List from "./components/List"

function App() {
  const [items, setItems] = useState(cars)

  return (
    <div className="App">
      <List items={items} setter={setItems}></List>
    </div>
  );
}

export default App;
