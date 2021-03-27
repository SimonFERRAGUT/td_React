import React from 'react';

// eslint-disable-next-line import/prefer-default-export

let size = 0;

function modifySize() {
  function increaseSize(e){
    e.preventDefault();
    fish.size++;
  }
  function decreaseSize(e){
    e.preventDefault();
    fish.size--;
  }

  return (
    <div>
      <a onClick={increaseSize}> + </a>
      <a onClick={decreaseSize}> - </a>
    </div>
  )
}


export const ExerciseThreePage = () => (
  <main>
    {modifySize()}
    <Fish size={size} />
  </main>
);
