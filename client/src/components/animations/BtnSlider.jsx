import React from 'react'
import leftArrow from '../../styles/assets/icons/left-arrow.png'
import rightArrow from '../../styles/assets/icons/right-arrow.png'

function BtnSlider({direction, moveSlide}) {
    console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide} className={direction === "next" ? 'btn-slide next' : "btn-slide prev" }>
        <img src={direction === "next" ? rightArrow : leftArrow} alt=""/>
    </button>
  )
}

export default BtnSlider