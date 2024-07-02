import React, { useState } from 'react';
import './HomePage.css';
import AddMovieForm from './AddMovieForm';
import EditMovieForm from './EditMovieForm';
import RateReviewForm from './RateReviewForm';

const HomePage = () => {
  const [movies, setMovies] = useState([
    {
      id: 1719887152305,
      title: 'Inception',
      description: 'Inception is a mind-bending thriller directed by Christopher Nolan. The story follows a skilled thief, Dom Cobb, who specializes in extracting secrets from deep within the subconscious during the dream state. He is given a chance to have his criminal history erased if he can successfully plant an idea into someone’s mind—a process known as "inception". As Cobb and his team of specialists delve deeper into the target’s dreams, they face numerous challenges and confrontations that blur the lines between reality and illusion.',
      releaseYear: 2010,
      genre: 'Sci-Fi',
      watched: false,
      rating: 0,
      review: ''
    },
    {
      id: 1719887152304,
      title: 'Interstellar',
      description: 'Directed by Christopher Nolan, Interstellar is a sci-fi epic that explores the depths of space and human emotion. Set in a dystopian future where Earth is ravaged by climate change, the story follows a group of astronauts led by Cooper (Matthew McConaughey) as they embark on a perilous journey through a wormhole to find a new habitable planet for humanity. The film delves into themes of love, sacrifice, and the relentless pursuit of knowledge, offering stunning visuals and a thought-provoking narrative that captivates audiences.',
      releaseYear: 2014,
      genre: 'Sci-Fi',
      watched: true,
      rating: 0,
      review: ''
    },
    {
      id: 1719887152303,
      title: 'The Dark Knight',
      description: 'The Dark Knight, directed by Christopher Nolan, is a gripping superhero film that redefines the genre. The movie follows Bruce Wayne (Christian Bale), aka Batman, as he faces his greatest adversary, the Joker (Heath Ledger). The Joker, a criminal mastermind with a chaotic and sinister agenda, plunges Gotham City into anarchy. As Batman tries to stop him, he faces moral dilemmas and tests of his own limits. The film is celebrated for its complex characters, intense action sequences, and philosophical themes, making it a landmark in cinematic history.',
      releaseYear: 2008,
      genre: 'Action',
      watched: true,
      rating: 0,
      review: ''
    },
   
  ]);
  

  const [showForm, setShowForm] = useState(false);
  const [editingMovie, setEditingMovie] = useState(null);
  const [showRateReviewForm, setShowRateReviewForm] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const addMovie = (newMovieData) => {
    const newMovie = {
      id: Date.now(),
      ...newMovieData,
      watched: false,
      rating: 0,
      review: '',
    };
    setMovies([...movies, newMovie]);
    setShowForm(false);
  };

  const editMovie = (id, updatedMovie) => {
    setMovies(movies.map(movie => movie.id === id ? { ...movie, ...updatedMovie } : movie));
    setEditingMovie(null);
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const toggleWatched = (id) => {
    setMovies(movies.map(movie => movie.id === id ? { ...movie, watched: !movie.watched } : movie));
  };

  const handleEditButtonClick = (movie) => {
    setEditingMovie(movie);
  };

  const handleCancelEdit = () => {
    setEditingMovie(null);
  };

  const handleRateReviewClick = (movie) => {
    setSelectedMovie(movie);
    setShowRateReviewForm(true);
  };

  const handleCloseRateReviewForm = () => {
    setShowRateReviewForm(false);
    setSelectedMovie(null);
  };

  const handleSaveReview = (newReview) => {
    setMovies(movies.map(movie =>
      movie.id === selectedMovie.id
        ? { ...movie, rating: newReview.rating, review: newReview.review }
        : movie
    ));
    setShowRateReviewForm(false);
    setSelectedMovie(null);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'star yellow' : 'star grey'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="home-page">
      <div className="header">
        <h1 className="title">My Watchlist</h1>
        <button onClick={toggleForm} className="add-movie-button">Add Movie</button>
      </div>
      {showForm && (
        <div className="add-movie-form-container">
          <AddMovieForm onAddMovie={addMovie} />
        </div>
      )}
      {editingMovie && (
        <div className="edit-movie-form-container">
          <EditMovieForm movie={editingMovie} onEditMovie={editMovie} onCancel={handleCancelEdit} />
        </div>
      )}
      {showRateReviewForm && selectedMovie && (
        <div className="rate-review-form-container">
          <RateReviewForm
            movie={selectedMovie}
            onClose={handleCloseRateReviewForm}
            onSave={handleSaveReview}
          />
        </div>
      )}
      <div className="movie-list">
        {movies.map(movie => (
          <div key={movie.id} className={`movie-card ${movie.watched ? 'watched' : ''}`}>
            <h2>{movie.title}</h2>
            <div className="movie-description">
              <p><strong>Description:</strong> {movie.description}</p>
            </div>
            <p><strong>Release Year:</strong> {movie.releaseYear}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <p><strong>ID:</strong> {movie.id}</p>
            <div className="movie-rating">
              <strong>Rating:</strong> {renderStars(movie.rating)}
            </div>
            <p><strong>Review:</strong> {movie.review}</p>
            <div className="movie-actions">
              <button
                onClick={() => toggleWatched(movie.id)}
                style={{
                  backgroundColor: movie.watched ? 'green' : '',
                }}
              >
                {movie.watched ? 'Watched' : 'Unwatched'}
              </button>
              <button onClick={() => handleEditButtonClick(movie)}>Edit</button>
              <button onClick={() => deleteMovie(movie.id)}>Delete</button>
              <button onClick={() => handleRateReviewClick(movie)}>Rate & Review</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
