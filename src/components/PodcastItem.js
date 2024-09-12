import React from 'react';

function PodcastItem({ podcast }) {
  return (
    <div className="podcast-item">
      <img src={`./images/${podcast.image}`} alt={podcast.title} className="podcast-image" />
      <div className="podcast-info">
        <h2>{podcast.title}</h2>
        <p>{podcast.description}</p>
        <small>{podcast.date}</small>
        <button className="play-button">Play Now</button>
      </div>
    </div>
  );
}

export default PodcastItem;
