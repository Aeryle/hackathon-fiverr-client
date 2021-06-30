import React from 'react';

function SearchInput() {
  return (
    <div className="text-center mt-12">
      <p>Please enter the name or the category wanted </p>
      <input
        type="text"
        placeholder="Rechercher"
        className="p-2
       bg-transparent border-2 border-blue-900 rounded-md focus:ring focus:ring-white"
      />
    </div>
  );
}

export default SearchInput;
