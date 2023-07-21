import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import slidersVideo from '../videos/sliders.mp4';
import boxVideo from '../videos/box.mp4';
import copyVideo from '../videos/copy.mp4';

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

            <div className="col-2">
               <h3>Move sliders...</h3>
               <video autoPlay loop muted>
                  <source src={slidersVideo} type="video/mp4"></source>
               </video>
            </div>
            <div className="col-2">
               <video autoPlay loop muted>
                  <source src={boxVideo} type="video/mp4"></source>
               </video>
               <h3>and get instant results!</h3>
            </div>
            <div className="col-2">
               <h3>As simple as a copy-paste</h3>
               <video autoPlay loop muted>
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
