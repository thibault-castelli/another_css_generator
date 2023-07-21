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
         <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="wave"
         >
            <path
               fill="#84a98c"
               fillOpacity="1"
               d="M0,32L48,69.3C96,107,192,181,288,202.7C384,224,480,192,576,192C672,192,768,224,864,213.3C960,203,1056,149,1152,149.3C1248,149,1344,203,1392,229.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
         </svg>
      </footer>
   );
};

export default Footer;
