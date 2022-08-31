import React from 'react'
import leftArrow from './icons/left-arrow.png'
import rightArrow from './icons/right-arrow.png'

function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : "btn-slide prev" }>
        <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  )
}

export default BtnSlider