import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { navVariant, linkVariant } from '../variants';

const Header = () => {
   const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

   const handleLinkClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
      e.currentTarget.blur();
      setIsHamburgerOpen(false);
   };

   return (
      <header>
         <div className="container">
            <h1>
               <NavLink to="/">another css generator</NavLink>
            </h1>

            <motion.nav
               initial={false}
               animate={isHamburgerOpen ? 'open' : 'closed'}
               onBlur={(e) => {
                  // Close nav if clicking outside the nav
                  if (!e.currentTarget.contains(e.relatedTarget)) {
                     setIsHamburgerOpen(false);
                  }
               }}
            >
               <motion.button
                  type="button"
                  onClick={(e) => {
                     setIsHamburgerOpen(!isHamburgerOpen);
                     if (isHamburgerOpen) {
                        e.currentTarget.blur();
                     }
                  }}
                  aria-expanded={isHamburgerOpen}
                  aria-controls="nav-header"
                  variants={{
                     open: { rotate: -90, margin: '10px 0 10px auto' },
                     closed: { rotate: 0, margin: '10px 0 10px auto' },
                  }}
                  aria-label="menu-button"
               >
                  <RxHamburgerMenu />
               </motion.button>

               <motion.ul id="nav-header" variants={navVariant}>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/box-shadow"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        box-shadow
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/text-shadow"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        text-shadow
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/border"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        border
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/border-radius"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        border-radius
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/gradient"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        gradient
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/transform"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        transform
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/hex-to-rgba"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        hex-to-rgba
                     </NavLink>
                  </motion.li>
                  <motion.li variants={linkVariant}>
                     <NavLink
                        to="/filter"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                        className="underline-link"
                     >
                        filter
                     </NavLink>
                  </motion.li>
               </motion.ul>
            </motion.nav>
         </div>
      </header>
   );
};

export default Header;
