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
                  <li>
                     <NavLink to="/border-radius">border-radius</NavLink>
                  </li>
                  <li>
                     <NavLink to="/border">border</NavLink>
                  </li>
                  <li>
                     <NavLink to="/transform">transform</NavLink>
                  </li>
                  <li>
                     <NavLink to="/hex-to-rgba">hex-to-rgba</NavLink>
                  </li>
                  <li>
                     <NavLink to="/gradient">gradient</NavLink>
                  </li>
               </ul>
            </nav>
         </div>
      </header>
   );
};

export default Header;
