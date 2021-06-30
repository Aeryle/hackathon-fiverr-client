import React from 'react';

function SearchInput() {
  return (
    <div className="text-center my-12">
      <p>Please enter the name or the category wanted </p>
      <input
        type="text"
        placeholder="Search"
        className="p-2 w-2/4
        border border-gray-800 rounded-md focus:outline-none"
      />
    </div>
  );
}

export default SearchInput;
