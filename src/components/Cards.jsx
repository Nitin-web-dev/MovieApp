import React from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'; // Import useInView

import './Cards.css';
const Cards = ({data}) => {

    const card= useInView({
        triggerOnce: true, 
        threshold: 0.1, 
      });

 

  return (
    <div ref={card}>
  
     
        <motion.div
          key={data.id}
          className="card"
          initial={{ opacity: 0, y: 50 }} // Initial animation properties
          animate={{ opacity: 1, y: 0 }} // Animation properties when entering
          transition={{ duration: 0.5, delay: 0.1 }} // Animation timing
        >
          <h3>{data.title}</h3>
          <p>{data.overview}</p>
          <img
            src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.title}
          />
        </motion.div>
    
    </div>
  )
}

export default Cards
