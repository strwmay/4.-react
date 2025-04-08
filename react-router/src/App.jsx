import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import './App.css'

import { BrowserRouter, Route, Routes } from 'react-router'
import Header from "./components/header/Header";
import Sobre from "./pages/sobre/Sobre";
import Contato from "./pages/Contato";
import Casa from "./pages/Casa";
import NaoEncontrado from "./pages/NaoEncontrado";
import Footer from "./components/footer/Footer";

function App() {

  return (
    <>
    <BrowserRouter>
      <Header />
      
    <main>
       <Routes>
          <Route path="/" element={<Casa />} />
          <Route path="/about" element={<Sobre />} />
          <Route path="/contact" element={<Contato />} />
          <Route path="*" element={<NaoEncontrado/>} />
       </Routes>
    </main>
<Footer />
    </BrowserRouter>
    </>
  )
}

export default App
