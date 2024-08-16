import React from 'react';
import opinion1 from '../../assets/image/poll-icon.gif';
import opinion2 from '../../assets/image/comment.gif';
import opinion3 from '../../assets/image/accessibility.webp';

const PublicOpinion = () => {
    return (
      <div>
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 py-12">
          <div className="flex flex-wrap justify-center max-w-[1000px] mx-auto gap-12">
            <img className="w-[60px] h-[60px]" src={opinion1} alt="" />
            <img className="w-[60px] h-[60px]" src={opinion2} alt="" />
            <img className="w-[60px] h-[60px] rounded-[50%]" src={opinion3} alt="" />
          </div>
        </div>
      </div>
    );
};

export default PublicOpinion;