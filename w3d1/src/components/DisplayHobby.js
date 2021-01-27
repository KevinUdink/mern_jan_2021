import React from 'react';

const DisplayHobby = (props) => {
  const { displayHobby } = props;
  // const { hobby, desc, yearsExp, equipment } = props.displayHobby;

  return (
    <div>
      <h3>Display Hobby</h3>
      <p>Hobby: { displayHobby.hobby ? displayHobby.hobby : ""}</p>
      {/* <p>Hobby: { hobby ? hobby : ""}</p> */}
      <p>Description: { displayHobby.desc ? displayHobby.desc : "" }</p>
      <p>Years Exp: { displayHobby.yearsExp ? displayHobby.yearsExp : ""}</p>
      <p>Equipment: { displayHobby.equipment ? displayHobby.equipment : ""}</p>
    </div>
  );
}

export default DisplayHobby;