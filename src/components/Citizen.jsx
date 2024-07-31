import React from 'react';
import './Citizen.css';

function Citizen({ index, citizen, handleToggleStatus }) {
  return (
    <div className="citizen-row">
      <div>{index + 1}</div>
      <div>{citizen.name}</div>
      <div>{citizen.age}</div>
      <div>{citizen.address}</div>
      <div>{citizen.status}</div>
      <div>
        <button onClick={() => handleToggleStatus(index)}>Toggle Status</button>
      </div>
    </div>
  );
}

export default Citizen;
