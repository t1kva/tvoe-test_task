import React from 'react';
import './scss/App.scss';
import NavMenu from './components/Header';
import MovieCard from './components/MovieCard';

const App: React.FC = () => {
  return (
    <>
      <NavMenu />
      <MovieCard />
    </>
  );
}

export default App;
