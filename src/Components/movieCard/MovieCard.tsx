import React from 'react';
import './MovieCard.scss';

type MovieCardType = {
  id: number
  title: string
  genre: string
  year: string
  imgSrc: string
};

interface MovieCardProps {
  props: MovieCardType
}

export default function MovieCard({ props }: MovieCardProps) {
  const {
    imgSrc, title, genre, year,
  } = props;

  // throw new Error('test');

  return (
    <div className="movie-card">
      <div className="movie-card__img">
        <img src={imgSrc} alt={title} />
      </div>
      <div className="movie-card__footer">
        <div className="movie-card__info">
          <h5 className="movie-card__title">{title}</h5>
          <span className="movie-card__time">{year}</span>
        </div>
        <span className="movie-card__genre">{genre}</span>
      </div>
    </div>
  );
}
