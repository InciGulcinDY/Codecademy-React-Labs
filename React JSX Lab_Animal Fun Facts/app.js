import { animals } from './animals';
import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');
const root = createRoot(container);

const title = "";
const background = <img className ='background' alt = 'ocean' src = '/images/ocean.jpg'/>;

const displayFact = (e) => {
  const html = document.getElementById('fact');
  const selectedAnimal = e.target.alt;
  const randomIndex = Math.floor(Math.random() * animals[selectedAnimal].facts.length);
  const randomFact = animals[selectedAnimal].facts[randomIndex];
  html.innerHTML = randomFact;
};

const images = [];

for(const animal in animals) {
  images.push(<img key={animal} className='animal' alt={animal} src={animals[animal].image} aria-label={animal} role='button' onClick={displayFact} />)
}

const showBackground = true;

const animalFacts = (
  <div>
    <h1>
      {title === "" ? "Click an animal for a fun fact" : title}
    </h1>
    { showBackground && background }
    <div className='animals'>
      {images}
    </div>
    <p id='fact'></p>
  </div>
);

root.render(animalFacts);
