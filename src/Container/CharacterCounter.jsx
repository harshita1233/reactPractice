import React from 'react';
import CharacterCounterInput from '../ReusableComponent/CharacterCounterInput';

const CharacterCounter = () => {
    let defaultMoods = ["Great", "Okay", "Bad"]
  
  return (
    <section>
      <h2>Mood Tracker</h2>
      <CharacterCounterInput text={"How was your day?"} defaults={defaultMoods}/>
    </section>
  )
}

export default CharacterCounter;
