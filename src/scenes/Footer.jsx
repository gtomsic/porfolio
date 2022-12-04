import SocialMediaIcons from '../components/SocialMediaIcons';

const Footer = () => {
   return (
      <footer className='h-64 bg-primary py-10'>
         <div className='w-5/6 mx-auto flex flex-col items-center'>
            <p className='text-6xl'>
               <SocialMediaIcons />
            </p>
            <div className='md:flex flex-col items-center mb-10'>
               <p
                  className='font-playfair font-semibold text-2xl
               '
               >
                  GABRIEL TOMSIC
               </p>
               <p
                  className='font-playfair text-md
               '
               >
                  &copy; 2022 GABRIEL. All Rights Reserved
               </p>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
