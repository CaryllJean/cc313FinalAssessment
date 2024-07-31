import React from 'react';

function SearchFilter({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search citizens..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
    />
  );
}

export default SearchFilter;
