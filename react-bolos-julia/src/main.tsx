import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

//componentes
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';

//rotas
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CadastroBolo from './pages/CadastroBolo';
import ListaBolo from './pages/ListaBolo';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/*Rotas */}
    {/*componentes*/}

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='cadastro/bolo' element={<CadastroBolo></CadastroBolo>} />
        <Route path='lista/bolo' element={<ListaBolo></ListaBolo>} />

      </Routes>
      <Footer />



    </BrowserRouter>


  </React.StrictMode>,
)
