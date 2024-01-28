import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { PRODUCT_REVIEW_API } from './constants';
import { ProductReviewCard } from './ProductReviewCard';

export default function ProductReviews() {

  // Declaring the React State variable here to access it in HTML
  const [productReviews, setProductReviews] = useState({'data': []});
  const [isLoading, setIsLoading] = useState(true);


  const urlSearchString = window.location.search;

  const params = new URLSearchParams(urlSearchString);
  let productASINNumber = params.get('productASINNumber')

  // Fetching the API response from backend here
  const fetchProductReviews = () => {
      const headers = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "access-token": "37mid0DAL9RPo2H",
      };
      const productReviewRequestBody = {
        // "asi_number": "B0BJ72WZQ7",
        "asi_number": productASINNumber,
      }

      // Fetching the API response and setting in local state variable
      return fetch(PRODUCT_REVIEW_API, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(productReviewRequestBody)
      })
        .then((response) => response.json())
        .then((data) => {
          setProductReviews(data.data)
          setIsLoading(false)
        } )

    }

  // This Lifecycle hook is created so that fetchProductReviews function can be called on page load 
  useEffect(() => {
    fetchProductReviews();
  }, []);

  return (
    <Container>
      <Header></Header>
      <div className="content">
        <div className="body flex column a-center j-center">
            <div className="main-container">
            <h3>Product Reviews:</h3>
            <br />
            <p><label htmlFor=""> Product ASIN Number: {productASINNumber}</label></p>
            {isLoading && <div className='loading-icon'><i className='fa fa-spinner fa-spin'></i></div>}
            <br />
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
