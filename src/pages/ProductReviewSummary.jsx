import React, { useState } from 'react'
import styled from 'styled-components';
import Header from '../components/Header';
import { PRODUCT_REVIEW_SUMMARY_API } from './constants';
export default function ProductReviewSummary() {

  // Declaring the React State variable here to access it in HTML
  const [productReviewSummary, setProductReviewSummary] = useState({'data': []});
  const [isLoading, setIsLoading] = useState(false);
  const [productASINNumber, setProductASINNumber] = useState("");

  // Fetching the API response from backend here
  const fetchProductReviewSummary = (productASINNumber) => {
      const headers = {
        'Content-type': 'application/json',
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "access-token": "37mid0DAL9RPo2H",
      };
      const productReviewRequestBody = {
        "asi_number": productASINNumber,
      }

      // Fetching the API response and setting in local state variable
      return fetch(PRODUCT_REVIEW_SUMMARY_API, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(productReviewRequestBody)
      })
        .then((response) => response.json())
        .then((data) => {
          setProductReviewSummary(data.data)
        } )
    }

    const handleASINSubmission = (event) => {
      setIsLoading(true)
      event.preventDefault();
      fetchProductReviewSummary(productASINNumber)
      setIsLoading(false)
    }

  return (
    <Container>
      <div className="content">
        <Header login/>
        <div className='body flex column a-center j-center'>             
          <div className="body flex column a-center j-center">
              <div className="main-container">
                <h4>Enter Product ASIN Number</h4>
                <div>
                  <form onSubmit={handleASINSubmission}>
                      <input
                      className='input_asin_number'
                        type="text" 
                        value={productASINNumber}
                        onChange={(e) => setProductASINNumber(e.target.value)}
                      />
                    <input type="submit" className='submit_btn'/>
                  </form>
                </div> 
              </div>

              {productReviewSummary?.product_review_summary && 
              <>
              <div className="main-container">
                <h3>Product Review Summarised by OpenAI:</h3>
                <div className={"card car1 card_div"}>
                  <p className="product-review-description">{productReviewSummary?.product_review_summary}</p>
                </div> 
                
                <a className='product_review_link' target='_blank'
                 href={`/product_reviews?productASINNumber=${productASINNumber}`} rel="noreferrer"
                 >See Product Customer Reviews</a>

              </div>

              {/* <ProductReviews
                productASINNumber={productASINNumber}
              >
              </ProductReviews> */}

              </>

}
          </div>
          {isLoading && <div className='loading-icon'><i className='fa fa-spinner fa-spin'></i></div>}
        </div>
      </div>
    </Container>
  )
}

// Styled component which can be used to design the Container div using any CSS rules we want
const Container = styled.div`
  color: white;
`;
