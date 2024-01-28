import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ProductReviews from './pages/ProductReviews';
import './App.css';
import ProductReviewSummary from './pages/ProductReviewSummary';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<ProductReviewSummary/>}></Route>
          <Route exact path='/product_reviews' element={<ProductReviews/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}
