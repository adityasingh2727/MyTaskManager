import React from 'react'

const InfoCard = ({ icon, label, value, color }) => {
  return (
    <div className="flex items-center gap-3 bg-white shadow-sm p-4 rounded-xl">
      <div className={`w-10 h-10 flex items-center justify-center rounded-full ${color} text-white text-xl`}>
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-500">{label}</p>
        <p className="text-lg font-semibold text-black">{value}</p>
      </div> 
    </div>
  );
};

export default InfoCard;