import React, { useState, useEffect } from 'react'
import { useRef } from 'react'
import BtnSlider from './BtnSlider'
import dataSlider from './DataSlider'



function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    const slideInterval = useRef()

    const startSlideTimer = () => {
        stopSlideTimer()
        slideInterval.current = setInterval(() => {
            setSlideIndex(slideIndex => slideIndex < dataSlider.length + 1 ? slideIndex + 1 : 0)
        }, 3000)
    }

    const stopSlideTimer = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }

    useEffect(() => {
        startSlideTimer()
        return () => stopSlideTimer()
    }, [])

    const nextSlide = () => {
        const index = slideIndex < dataSlider.length - 1 ? slideIndex + 1 : 0;
        setSlideIndex(index)

    }

    const prevSlide = () => {
        const index = slideIndex > 0 ? slideIndex - 1 : dataSlider.length - 1;
        setSlideIndex(index)
    }

    const moveDot = index => {
        setSlideIndex(index)
    }

    return (
        <div className="container-slider" >
            {dataSlider.map((obj, index) => {
                return (
                    <div key={obj.id} className={slideIndex === index + 1 ? "slide active-anim" : "slide"} >
                        <img src={process.env.PUBLIC_URL + `/Images/img${index + 1}.jpg`}
                            alt="" />
                        <h2 className='slideTitre'>{obj.titre}</h2>

                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div onClick={() => moveDot(index + 1)} className={slideIndex === index + 1 ? "dot active" : "dot"}></div>
                ))}
            </div>

        </div>
    )
}



export default Slider