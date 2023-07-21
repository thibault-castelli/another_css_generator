import { Link } from 'react-router-dom';

const Error = () => {
   return (
      <main>
         <section className="container">
            <h2>error 404</h2>
            <p>Page not found</p>
            <Link to="/" className="underline-link title-link">
               Get back home
            </Link>
         </section>
      </main>
   );
};

export default Error;
