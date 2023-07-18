import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu } from 'react-icons/rx';
import { motion, Variants } from 'framer-motion';
import { useState } from 'react';

const Header = () => {
   const [isHamburgerOpen, setIsHamburgerOpen] = useState<boolean>(false);

   const handleLinkClick = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
   ) => {
      e.currentTarget.blur();
      setIsHamburgerOpen(false);
   };

   const itemVariants: Variants = {
      open: {
         opacity: 1,
         y: 0,
         transition: { type: 'spring', stiffness: 300, damping: 24 },
      },
      closed: { opacity: 0, y: 90, transition: { duration: 0.1 } },
   };

   return (
      <header>
         <div className="container">
            <h1>
               <NavLink to="/">css generator</NavLink>
            </h1>

            <motion.nav
               initial={false}
               animate={isHamburgerOpen ? 'open' : 'closed'}
            >
               <motion.button
                  type="button"
                  onClick={(e) => {
                     setIsHamburgerOpen(!isHamburgerOpen);
                     if (isHamburgerOpen) {
                        e.currentTarget.blur();
                     }
                  }}
                  variants={{
                     open: { rotate: -90, margin: '10px 0 10px auto' },
                     closed: { rotate: 0 },
                  }}
               >
                  <RxHamburgerMenu />
               </motion.button>

               <motion.ul
                  variants={{
                     open: {
                        height: '223px',
                        marginBottom: '20px',
                        padding: '10px',
                        clipPath: 'circle(200%)',
                        y: 0,
                        x: 0,
                        opacity: 1,
                        transition: {
                           type: 'spring',
                           bounce: 0,
                           duration: 0.4,
                           delayChildren: 0.1,
                           staggerChildren: 0.03,
                        },
                     },
                     closed: {
                        height: 0,
                        marginBottom: '0',
                        padding: '0',
                        clipPath: 'circle(0%)',
                        y: -40,
                        x: 170,
                        opacity: 0.5,
                        transition: {
                           type: 'spring',
                           bounce: 0,
                           duration: 0.4,
                        },
                     },
                  }}
               >
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/box-shadow"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        box-shadow
                     </NavLink>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/text-shadow"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        text-shadow
                     </NavLink>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/border"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        border
                     </NavLink>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/border-radius"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        border-radius
                     </NavLink>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/gradient"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        gradient
                     </NavLink>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/transform"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        transform
                     </NavLink>
                  </motion.li>
                  <motion.li variants={itemVariants}>
                     <NavLink
                        to="/hex-to-rgba"
                        onClick={(e) => {
                           handleLinkClick(e);
                        }}
                     >
                        hex-to-rgba
                     </NavLink>
                  </motion.li>
               </motion.ul>
            </motion.nav>
         </div>
      </header>
   );
};

export default Header;
