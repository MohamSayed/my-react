import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArcticleList from './components/articles/ArticleList'
function App() {
  const articleNames = ['Technology for animals...', 'Heathline article...']
  return (
    <div className="App">
      <ArcticleList articleNames={articleNames} />
    </div>
  );
}

export default App;
