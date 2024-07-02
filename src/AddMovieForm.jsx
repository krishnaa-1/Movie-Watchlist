import React, { useState } from 'react';
import './AddMovieForm.css'; // Import CSS file for styling

const AddMovieForm = ({ onAddMovie }) => {
  const [newMovieData, setNewMovieData] = useState({
    title: '',
    description: '',
    releaseYear: '',
    genre: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewMovieData({
      ...newMovieData,
      [name]: value,
    });
  };

  const addMovie = () => {
    const { title, description, releaseYear, genre } = newMovieData;
    onAddMovie({ title, description, releaseYear: parseInt(releaseYear), genre });
    setNewMovieData({
      title: '',
      description: '',
      releaseYear: '',
      genre: '',
    });
  };

  const handleTextAreaChange = (e) => {
    const { value } = e.target;
    if (value.split(' ').length <= 200) {
      setNewMovieData({
        ...newMovieData,
        description: value,
      });
    }
  };

  return (
    <form className="add-movie-form">
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={newMovieData.title}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          name="description"
          placeholder="Description"
          value={newMovieData.description}
          onChange={handleTextAreaChange}
          maxLength={1000} // Optional: Maximum characters allowed
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="releaseYear">Release Year</label>
        <input
          type="number"
          id="releaseYear"
          name="releaseYear"
          placeholder="Release Year"
          value={newMovieData.releaseYear}
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <input
          type="text"
          id="genre"
          name="genre"
          placeholder="Genre"
          value={newMovieData.genre}
          onChange={handleInputChange}
          required
        />
      </div>
      <button className="add-button" type="button" onClick={addMovie}>Add</button>
    </form>
  );
};

export default AddMovieForm;
