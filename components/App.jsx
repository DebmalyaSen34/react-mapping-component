import React from 'react';
import emojipedia from '../src/emojis';
import Card from './Card';
import '../src/App.css';

function getDictionary(dict){
  return(
    <Card 
    key={dict.id}
    name={dict.name}
    emoji={dict.emoji}
    meaning={dict.meaning}/>
  );
};

function App(){
  return (
    <div>
      <h1>
        <span>Emojipedia</span>
      </h1>

      <dl className='dictionary'>
        {emojipedia.map(getDictionary)}
      </dl>

    </div>
  );
};

export default App;