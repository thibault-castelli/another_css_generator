import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import slidersVideo from '../videos/sliders.mp4';
import boxVideo from '../videos/box.mp4';
import copyVideo from '../videos/copy.mp4';
import { GoSmiley } from 'react-icons/go';

const Home = () => {
   return (
      <motion.main
         initial={{ opacity: 0.5, x: -500 }}
         animate={{ opacity: 1, x: 0 }}
         transition={{
            x: { type: 'spring', stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
         }}
      >
         <section className="container" id="home-section">
            <h2>Welcome to another css generator</h2>

            <div>
               <h3>Move sliders...</h3>
               <video autoPlay loop muted tabIndex={-1} title="sliders moving">
                  <source src={slidersVideo} type="video/mp4"></source>
               </video>
            </div>
            <div>
               <video
                  autoPlay
                  loop
                  muted
                  tabIndex={-1}
                  title="box shadow changing"
               >
                  <source src={boxVideo} type="video/mp4"></source>
               </video>
               <h3>and get instant results!</h3>
            </div>
            <div>
               <h3>
                  As simple as a copy-paste <GoSmiley aria-label="smiley" />
               </h3>
               <video
                  autoPlay
                  loop
                  muted
                  tabIndex={-1}
                  title="clicking copy link"
               >
                  <source src={copyVideo} type="video/mp4"></source>
               </video>
            </div>

            <Link to="/box-shadow" className="title-link">
               Start creating now!
            </Link>
         </section>
      </motion.main>
   );
};

export default Home;
