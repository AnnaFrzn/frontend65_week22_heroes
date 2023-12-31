import React from "react";
import "./rating.css"

function Rating() {
    return (
        <div className="star-rating">
            <div className="star-rating__wrap">
                <input className="star-rating__input" id="star-rating-5" type="radio" name="rating" value="5" />
                <label className="star-rating__ico fa fa-star-o fa-lg" for="star-rating-5" title="5 out of 5 stars"></label>
                <input className="star-rating__input" id="star-rating-4" type="radio" name="rating" value="4" />
                <label className="star-rating__ico fa fa-star-o fa-lg" for="star-rating-4" title="4 out of 5 stars"></label>
                <input className="star-rating__input" id="star-rating-3" type="radio" name="rating" value="3" />
                <label className="star-rating__ico fa fa-star-o fa-lg" for="star-rating-3" title="3 out of 5 stars"></label>
                <input className="star-rating__input" id="star-rating-2" type="radio" name="rating" value="2" />
                <label className="star-rating__ico fa fa-star-o fa-lg" for="star-rating-2" title="2 out of 5 stars"></label>
                <input className="star-rating__input" id="star-rating-1" type="radio" name="rating" value="1" />
                <label className="star-rating__ico fa fa-star-o fa-lg" for="star-rating-1" title="1 out of 5 stars"></label>
            </div>
        </div>
    )
}

export default Rating;