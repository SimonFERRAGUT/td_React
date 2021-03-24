import React, { useEffect, useState } from 'react';
import './ex4.css';

// eslint-disable-next-line import/prefer-default-export

const SuperHero = (props) => (
  <div>
    <h2>Name : {props.name}</h2>
    <h3>Strength : {props.strength} </h3>
  </div>
);
export const ExerciseFourView = () => {
  // eslint-disable-next-line no-unused-vars
  const [superheroes, setSuperheroes] = useState([]);

  useEffect(() => {
    fetch('https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json')
      .then((res) => res.json())
      .then((heroes) => setSuperheroes(heroes));
  });

  const superHeroesList = superheroes.filter((superhero).appearance.eyeColor == 'Red');

  return (
    
    <div class="redEyed"> 
      <h1>Superheroes with red eyes ! </h1>
      <SuperHero name={superHeroesList.biography.fullname} strength={superHeroesList.powerstats.strength}/>
    </div>
    
  );
};
