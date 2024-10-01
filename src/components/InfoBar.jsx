import React, { useState } from 'react';
import Icon from './Icon'; // Assuming you have the Icon component
import Rules from './Rules'; // Import your Rules component

const InfoWithRules = () => {
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="relative w-full px-4">
      <div
        className="cursor-pointer float-end "
        onMouseEnter={() => setShowRules(true)}
        onMouseLeave={() => setShowRules(false)}
      >
        <div className=' italic rounded-full w-6 text-center text-white h-6 border-2 border-white'>
          i
        </div>
      </div>

        <div>
        {showRules && (
        <Rules/>
      )}
        </div>

    </div>
  );
};

export default InfoWithRules;
