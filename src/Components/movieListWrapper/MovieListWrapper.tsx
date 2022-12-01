import React from 'react';
import './MovieListWrapper.scss';

interface Layout extends React.HTMLAttributes<Element> {
  children: React.ReactNode;
}

export default function MovieListWrapper({ children }: Layout) {
  return (<div className="movie-list-wrapper">{children}</div>);
}
