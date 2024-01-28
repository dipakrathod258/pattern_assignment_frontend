import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductReviews from './pages/ProductReviews';
import './App.css';


export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ProductReviews/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}