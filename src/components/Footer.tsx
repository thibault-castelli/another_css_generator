import { AiFillGithub } from 'react-icons/ai';

const Footer = () => {
   return (
      <footer>
         <div className="container">
            <p>
               made by
               <a
                  href="https://www.linkedin.com/in/thibault-castelli"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="underline-link"
               >
                  Thibault Castelli
               </a>
            </p>
            <a
               href="https://github.com/nineInchClous"
               rel="noopener noreferrer"
               target="_blank"
            >
               <AiFillGithub />
            </a>
         </div>
      </footer>
   );
};

export default Footer;
