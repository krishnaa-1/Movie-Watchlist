// RateReviewForm.jsx
import React, { useState } from 'react';

const RateReviewForm = ({ movie, onClose, onSave }) => {
  const [rating, setRating] = useState(movie.rating); // Initialize with movie's current rating
  const [review, setReview] = useState(movie.review); // Initialize with movie's current review

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  const handleSave = () => {
    onSave({ rating, review }); // Pass rating and review back to parent component
    onClose(); // Close the form after saving
  };

  const handleCancel = () => {
    onClose(); // Close the form without saving
  };

  return (
    <div className="rate-review-form">
      <h2>Rate & Review: {movie.title}</h2>
      <div>
        <label>Rating:</label>
        <div className="star-rating">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={star <= rating ? 'star yellow' : 'star grey'}
              onClick={() => handleRatingChange(star)}
            >
              &#9733;
            </span>
          ))}
        </div>
      </div>
      <div>
        <label>Review:</label>
        <textarea
          value={review}
          onChange={handleReviewChange}
          rows={4} // Adjust the number of visible rows
          style={{ minHeight: '100px', maxHeight: '200px', resize: 'vertical' }} // Limit height and allow vertical resize
        />
      </div>
      <div className="form-buttons23">
        <button onClick={handleSave}>Save</button>
        <button onClick={handleCancel}>Cancel</button>
      </div>
    </div>
  );
};

export default RateReviewForm;
