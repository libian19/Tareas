import React from 'react';
import freeCodeCampLogo from '../assets/fcc_primary.svg'
import '../styles/LogofreeCodeCamp.css'

function LogofreeCodeCamp(){
  return(
    <div className='contenedor--logo'>
      <img 
        className='logo'
        src={ freeCodeCampLogo }
        alt='logo'
      />
    </div>
  )
}
export { LogofreeCodeCamp };