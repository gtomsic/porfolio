import { useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import useMediaQuery from '../hooks/useMediaQuery';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';

const Link = ({ page, selectedPage, setSelectedPage }) => {
   const lowerCasePage = page.toLowerCase();
   return (
      <AnchorLink
         className={`${
            selectedPage === lowerCasePage ? 'text-yellow' : ''
         } hover:text-yellow transition duration-500`}
         href={`#${lowerCasePage}`}
         onClick={() => setSelectedPage(lowerCasePage)}
      >
         {page}
      </AnchorLink>
   );
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }) => {
   const [isMenuToggled, setIsMenuToggled] = useState(false);
   const isDesktop = useMediaQuery('(min-width: 768px)');
   const navbarBackground = isTopOfPage ? '' : 'bg-primary';

   return (
      <nav className={`${navbarBackground} z-40 w-full fixed top-0 py-6`}>
         <div className='flex items-center justify-between mx-auto w-5/6'>
            <h4 className='font-playfair text-3xl font-bold'>GT</h4>

            {/* DESKTOP NAV */}
            {isDesktop ? (
               <div className='flex justify-between gap-16 font-opensans text-sm font-semibold'>
                  <Link
                     page='Home'
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link
                     page='Skills'
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link
                     page='Projects'
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link
                     page='Testimonials'
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
                  <Link
                     page='Contact'
                     selectedPage={selectedPage}
                     setSelectedPage={setSelectedPage}
                  />
               </div>
            ) : (
               <button
                  className='rounded-md bg-primary p-2 text-3xl'
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
               >
                  <FiMenu />
               </button>
            )}

            {/* MOBILE MENU POPUP */}
            {!isDesktop && isMenuToggled && (
               <div className='fixed right-0 bottom-0 h-full bg-secondary w-[300px]'>
                  {/* CLOSE ICON */}
                  <div className='flex justify-end py-8 px-12 text-3xl'>
                     <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <MdClose />
                     </button>
                  </div>

                  {/* MENU ITEMS */}
                  <div className='flex flex-col gap-10 ml-[33%] text-2xl text-white'>
                     <Link
                        page='Home'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                     />
                     <Link
                        page='Skills'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                     />
                     <Link
                        page='Projects'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                     />
                     <Link
                        page='Testimonials'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                     />
                     <Link
                        page='Contact'
                        selectedPage={selectedPage}
                        setSelectedPage={setSelectedPage}
                     />
                  </div>
               </div>
            )}
         </div>
      </nav>
   );
};

export default Navbar;
