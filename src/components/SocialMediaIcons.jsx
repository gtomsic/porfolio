import React from 'react';

import { BsTwitter, BsYoutube, BsLinkedin } from 'react-icons/bs';

const SocialMediaIcons = () => {
   return (
      <div className='flex justify-center md:justify-start my-10 gap-7 text-3xl'>
         <a
            href='https://www.linkedin.com/in/gabriel-tomsic-0013561b3/'
            target='_blank'
            className='hover:opacity-50 transition duration-500'
            rel='noreferrer'
         >
            <BsLinkedin />
         </a>
         <a
            href='https://twitter.com/TomsicGabriel'
            target='_blank'
            className='hover:opacity-50 transition duration-500'
            rel='noreferrer'
         >
            <BsTwitter />
         </a>
         <a
            href='https://www.youtube.com/channel/UCFa4uWce7eLyJNzgYKGSG9A'
            target='_blank'
            className='hover:opacity-50 transition duration-500'
            rel='noreferrer'
         >
            <BsYoutube />
         </a>
      </div>
   );
};

export default SocialMediaIcons;
