import React from 'react';
import Cards from './Cards';
import './Cards.css'

const CardsSection = ({ movieData }) => {
  const resultMovie = movieData.results;
  
  return (
    <div className='carsSectinonWrapper'>
     
      {resultMovie.map((data) => (<Cards key={data.id}  data={data}/>))}
    </div>
  );
}

export default CardsSection;
