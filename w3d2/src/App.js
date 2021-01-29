import './App.css';
import React, { useState } from 'react';
import ListForm from './components/ListForm';
import DisplayList from './components/DisplayList';

function App() {
  const [ list, setList ] = useState([]);

  return (
    <div className="App">
      <ListForm list={list} setList={setList} />
      <DisplayList itemList={list} setItemList={setList} />
      {/* <DisplayList /> */}
    </div>
  );
}

export default App;
