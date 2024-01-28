import React from 'react'
import 'font-awesome/css/font-awesome.min.css';

export const ProductReviewCard = ({ index, productReview }) => {
    // This component is to display the product review card & accepts index & product review as React PROPS 

    // This object is created for displaying rating stars UI element
    const iterations = Array.from({ length: productReview?.rating }, (_, index) => index + 1);

    return (

        <div className={"card card"+index+ " card_div"}>
            <p className="product-review-description">{productReview?.body}</p>
            <div class="float-container">
                <div class="float-child">
                    <ul className='product-rating'>
                        {iterations.length > 0 && iterations.map((iteration) => (
                            <div key={iteration}>
                                <li><i className="fa fa-solid fa-star"></i></li>
                            </div>
                        ))}
                    </ul>
                </div>
                <div class="float-child">
                    <p>{productReview?.profile?.name}</p>
                </div>
            </div>
            <div class="">
                <div class="float-child">
                    <p>{productReview?.date?.raw}</p>
                </div>
            </div>
        </div> 
    )
}
