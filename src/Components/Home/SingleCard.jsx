import React from 'react';

const SingleCard = ({ title, points, image }) => {
  return (
    <div className="bg-white shadow-lg overflow-hidden max-w-md w-[350px] mx-auto flex flex-col">
      <div className="flex items-center p-4">
        <img className="w-[60px] h-[60px] mr-4" src={image} alt="Logo" />
        <h1 className="text-[#4A5568] font-semibold">{title}</h1>
      </div>
      <div className="p-6 flex flex-col">
        <ul className="space-y-2 text-gray-800">
          {points.map((point, index) => (
            <li key={index} className="flex items-start text-[14px]">
              <span className="mr-3 text-[#4A5568] text-[13px]">
                <i class="fa-solid fa-link text-[#c198c4]"></i>
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SingleCard;