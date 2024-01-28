import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { PRODUCT_REVIEW_API } from './constants';
import { ProductReviewCard } from './ProductReviewCard';

export default function ProductReviews() {

  // Declaring the React State variable here to access it in HTML
  const [productReviews, setProductReviews] = useState({'data': []});

  // Fetching the API response from backend here
  const fetchProductReviews = () => {
      const headers = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "access-token": "37mid0DAL9RPo2H",
      };
      const productReviewRequestBody = {
        "asi_number": "B0BJ72WZQ7",
      }

      // Fetching the API response and setting in local state variable
      return fetch(PRODUCT_REVIEW_API, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(productReviewRequestBody)
      })
        .then((response) => response.json())
        .then((data) => setProductReviews(data.data))
    }

  // This Lifecycle hook is created so that fetchProductReviews function can be called on page load 
  useEffect(() => {
    fetchProductReviews();
  }, []);


  return (
    <Container>
      <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
            <div className="main-container">
            <h3>Product Reviews:</h3>
              {productReviews.length > 0 && productReviews.map((element, index) => 
                <ProductReviewCard 
                  key={element.id}
                  productReview={element}
                  index={index}
                >
                </ProductReviewCard>)
              }
            </div>
        </div>
      </div>
    </Container>
  )
}

// Styled component which can be used to design the Container div using any CSS rules we want
const Container = styled.div`
  color: white;
`;
