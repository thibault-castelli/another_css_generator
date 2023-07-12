import { NavLink } from 'react-router-dom';

const Header = () => {
   return (
      <header>
         <div className="container">
            <NavLink to="/">
               <h1>css generator</h1>
            </NavLink>
            <nav>
               <ul>
                  <li>
                     <NavLink to="/box-shadow">box-shadow</NavLink>
                  </li>
                  <li>
                     <NavLink to="/text-shadow">text-shadow</NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
