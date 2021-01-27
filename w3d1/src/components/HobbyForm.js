import React, { useState } from 'react';
import DisplayHobby from './DisplayHobby';

const HobbyForm = () => {
  const [ hobby, setHobby ] = useState("");
  const [ desc, setDesc ] = useState("");
  const [ yearsExp, setYearsExp ] = useState(0);
  const [ equipment, setEquipment ] = useState("");
  const [ display, setDisplay ] = useState({});

  const submitForm = (e) => {
    e.preventDefault();

    // setters of state are ASYNCHRONOUS!
    //   Do NOT count on a new value in state UNTIL after the setter returns
    setDisplay({
      hobby: hobby,
      desc: desc,
      yearsExp: yearsExp,
      equipment: equipment,
    });
    
    setHobby("");
    setDesc("");
    setYearsExp(0);
    setEquipment("");
  };

  return (
    <div>
      <h3>Welcome to the Hobby Form</h3>
      {/* using a function without params will wait for the event to happen and then it will send the event
          object as a parameter to the function automatically */}
      <form onSubmit={ submitForm }>
        <div>
          <label>Hobby</label>
          <input 
            type="text" 
            value={ hobby }
            onChange={(e) => setHobby(e.target.value)}
          />
        </div>
        <div>
          <label>Description</label>
          <input 
            type="text" 
            value={ desc }
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div>
          <label>Years Experience</label>
          <input 
            type="number" 
            value={ yearsExp }
            onChange={(e) => setYearsExp(e.target.value)}
          />
        </div>
        <div>
          <label>Equipment Needed</label>
          <input 
            type="text" 
            value={ equipment }
            onChange={(e) => setEquipment(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <DisplayHobby displayHobby={ display } />
    </div>
  );
}

export default HobbyForm;