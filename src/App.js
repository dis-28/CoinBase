import React from 'react'
import { Route, Link, Routes } from 'react-router-dom';
import { Navbar, Cryptocurrencies, CryptoDetails, Homepage, Footer } from './components';
import './App.css';
import { Container } from "@mui/material";
import { green } from '@mui/material/colors';




const App = () => {
  return (
    <div className='app'>
      <div className='navBar'>
        <Navbar />
      </div>
      <div className='main'>
        <Container sx={{ background: green[200], height: '100vh' }}>
          <div className='routes'>
            <Routes>
              <Route path='/' element={<Homepage />} />
              <Route path='/Cryptocurrencies' element={<Cryptocurrencies />} />
              <Route path='/Crypto/:coinId' element={<CryptoDetails />} />
            </Routes>
          </div>
        </Container>
      </div>

      <div className='footer'>

        <Footer />
      </div>
    </div>
  )
}

export default App
