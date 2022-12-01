import React from 'react';
import './home.scss';
import film1 from 'img/film-1.jpg';
import film2 from 'img/film-2.jpg';
import film3 from 'img/film-3.jpg';
import Hero from '../Components/Hero/Hero';
import NavigationPanel from '../Components/NavigationPanel/NavigationPanel';
import CategoryList from '../Components/CategoryList/CategoryList';
import ResultsSort from '../Components/ResultsSort/ResultsSort';
import MovieListWrapper from '../Components/movieListWrapper/MovieListWrapper';
import MovieCard from '../Components/movieCard/MovieCard';
import ResultCount from '../Components/ResultCount/ResultCount';

export default function Home() {
  const MovieCardList = [
    {
      id: 0,
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004',
      imgSrc: film1,
    },
    {
      id: 1,
      title: 'Bohemian Rhapsody',
      genre: 'Drama, Biography, Music',
      year: '2003',
      imgSrc: film2,
    },
    {
      id: 2,
      title: 'Inception',
      genre: 'Action & Adventure',
      year: '1994',
      imgSrc: film3,
    },
    {
      id: 3,
      title: 'Pulp Fiction',
      genre: 'Action & Adventure',
      year: '2004',
      imgSrc: film1,
    },
    {
      id: 4,
      title: 'Bohemian Rhapsody',
      genre: 'Drama, Biography, Music',
      year: '2003',
      imgSrc: film2,
    },
    {
      id: 5,
      title: 'Inception',
      genre: 'Action & Adventure',
      year: '1994',
      imgSrc: film3,
    },
  ];
  const count = 12;

  return (
    <>
      <Hero />
      <NavigationPanel>
        <CategoryList />
        <ResultsSort />
      </NavigationPanel>
      <ResultCount props={count} />
      <MovieListWrapper>
        <>
          {MovieCardList.map((item) => <MovieCard props={item} key={item.id} />)}
        </>
      </MovieListWrapper>
    </>
  );
}
