import React, { useState } from 'react';
import './EditMovieForm.css';

const EditMovieForm = ({ movie, onEditMovie, onCancel }) => {
  const [title, setTitle] = useState(movie.title);
  const [description, setDescription] = useState(movie.description);
  const [releaseYear, setReleaseYear] = useState(movie.releaseYear);
  const [genre, setGenre] = useState(movie.genre);

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditMovie(movie.id, { title, description, releaseYear, genre });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-movie-form">
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          className="movie-description"
        />
      </label>
      <label>
        Release Year:
        <input
          type="number"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
        />
      </label>
      <label>
        Genre:
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
      </label>
      <div className="form-actions">
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>Cancel</button>
      </div>
    </form>
  );
};

export default EditMovieForm;
