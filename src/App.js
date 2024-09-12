import React from 'react';
import PodcastList from './components/PodcastList';
import './index.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Latest Podcasts</h1>
      </header>
      <PodcastList />
      <footer className="footer">
        <p>© 2024 Podcast World. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
