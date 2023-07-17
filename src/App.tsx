import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SharedLayout from './components/SharedLayout';
import BoxShadow from './pages/BoxShadow';
import TextShadow from './pages/TextShadow';
import BorderRadius from './pages/BorderRadius';
import Border from './pages/Border';
import Error from './pages/Error';
import Transform from './pages/Transform';
import HexToRgba from './pages/HexToRgba';

function App() {
   return (
      <>
         <BrowserRouter>
            <Routes>
               <Route path="/" element={<SharedLayout />}>
                  <Route index element={<Home />} />
                  <Route path="/box-shadow" element={<BoxShadow />} />
                  <Route path="/text-shadow" element={<TextShadow />} />
                  <Route path="/border-radius" element={<BorderRadius />} />
                  <Route path="/border" element={<Border />} />
                  <Route path="/transform" element={<Transform />} />
                  <Route path="/hex-to-rgba" element={<HexToRgba />} />
                  <Route path="*" element={<Error />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </>
   );
}

export default App;
