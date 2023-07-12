import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SharedLayout from './components/SharedLayout';
import BoxShadow from './pages/BoxShadow';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/box-shadow" element={<BoxShadow />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
