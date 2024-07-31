import React, { useState } from 'react';
import Citizen from './Citizen';
import SearchFilter from './SearchFilter';

const citizensData = [
  { name: 'Caryll Jean', age: 21, address: 'Mangyan', status: 'Active' },
  { name: 'Coleen Joyce', age: 25, address: 'Sibonga', status: 'Active' },
  { name: 'Clyde Justin', age: 56, address: 'Sayao', status: 'Active' },
  { name: 'Cythae Janine', age: 26, address: 'Banlot', status: 'Inactive' },
  { name: 'Caren Jhan', age: 30, address: 'Naga', status: 'Active' },
  { name: 'Caleb Jun', age: 28, address: 'San Fernando', status: 'Inactive' },
  { name: 'Cathalea Jane', age: 29, address: 'Santander', status: 'Active' },
  { name: 'Charmaine Joy', age: 60, address: 'Mangyan', status: 'Inactive' },
  { name: 'Chanele Janine', age: 47, address: 'Badian', status: 'Inactive' },
  { name: 'Cleydon Joseph', age: 35, address: 'Bohol', status: 'Active' },
];

function Citizens() {
  const [citizens, setCitizens] = useState(citizensData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleToggleStatus = (index) => {
    const updatedCitizens = citizens.map((citizen, i) => 
      i === index ? { ...citizen, status: citizen.status === 'Active' ? 'Inactive' : 'Active' } : citizen
    );
    setCitizens(updatedCitizens);
  };

  const filteredCitizens = citizens.filter(citizen =>
    citizen.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <SearchFilter searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className="citizen-row citizen-header">
        <div>No.</div>
        <div>Name</div>
        <div>Age</div>
        <div>Address</div>
        <div>Status</div>
        <div>Action</div>
      </div>
      {filteredCitizens.map((citizen, index) => (
        <Citizen
          key={index}
          index={index}
          citizen={citizen}
          handleToggleStatus={handleToggleStatus}
        />
      ))}
    </div>
  );
}

export default Citizens;