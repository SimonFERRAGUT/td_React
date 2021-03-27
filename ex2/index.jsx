import React from 'react';

export const character = {
  name: 'Andy Dufresne',
  age: 35,
  job: 'Banker',
  isInPrison: true,
  picture:
    'https://editorial01.shutterstock.com/wm-preview-1500/770117rj/14ddb2a4/gtv-archive-shutterstock-editorial-770117rj.jpg',
};

export const character2 = {
  name: 'Alain Cuny',
  age: 89,
  job: 'Actor',
  isInPrison: false,
  picture:
    'https://editorial01.shutterstock.com/wm-preview-1500/770117rj/14ddb2a4/gtv-archive-shutterstock-editorial-770117rj.jpg',
};

export const ExerciseTwoPage = () => (
  <main>
    <p>Here are our characters</p>
    <Character name={character.name} age={character.age} job={character.age} isInPrison={character.isInPrison}/>
    <Character name={character2.name} age={character2.age} job={character2.age} isInPrison={character2.isInPrison}/>
    
  </main>
);
