import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SharedLayout from './components/SharedLayout';
import BoxShadow from './pages/BoxShadow';
import TextShadow from './pages/TextShadow';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/box-shadow" element={<BoxShadow />} />
                  <Route path="/text-shadow" element={<TextShadow />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
