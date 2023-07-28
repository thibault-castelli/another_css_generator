import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Error = () => {
   useEffect(() => {
      document.title = 'Error - Another CSS Generator';
   }, []);

   return (
      <main>
         <section className="container" id="error-section">
            <h2>error 404</h2>
            <h3>Page not found</h3>
            <Link to="/" className="underline-link title-link">
               Get back home
            </Link>
         </section>
      </main>
   );
};

export default Error;
