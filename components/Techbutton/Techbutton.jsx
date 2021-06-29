import React, { useState } from 'react';

export default function Techbutton() {
  const [isTech, setIsTech] = useState(false);

  const handleTech = () => {
    setIsTech(!isTech);
  };

  return (
    <div className="flex flex-col p-3 bg-black bg-opacity-50 text-white ">
      <button onClick={handleTech}>Tech</button>
      {isTech && (
        <div className="">
          <button>Javascript</button>
          <button>React</button>
          <button>Next</button>
          <button>PHP</button>
          <button>Symphonie</button>
        </div>
      )}
    </div>
  );
}
