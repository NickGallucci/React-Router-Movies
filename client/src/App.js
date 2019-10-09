import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import { Route } from 'react-router-dom';
import MovieList from './Movies/Movie.js';
import Movie from './Movies/Movie.js';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <route exact path="/" component={ MovieList } />
      <route path="/movies/:id" component={ Movie } />
    </div>
  );
};

export default App;
