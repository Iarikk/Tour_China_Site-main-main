import React from 'react';
import './MovieModal.css';

const MovieModal = ({ movie, onClose }) => {
    if (!movie) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <h2>{movie.title}</h2>
                <img src={movie.poster} alt={movie.title} className="modal-poster" />
                <p>{movie.description}</p>
                <p><strong>Цена:</strong> {movie.director}</p>
                <p><strong>Отель:</strong> {movie.cast.join(', ')}</p>
            </div>
        </div>
    );
};

export default MovieModal;