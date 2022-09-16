import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BtnSlider from './BtnSlider';
import dataSlider from './DataSlider';

function Slider() {

    const [slideIndex, setSlideIndex] = useState(0)

    const slideInterval = useRef()
    const startSlideTimer = () => {
        stopSlideTimer()
        slideInterval.current = setInterval(() => {
            setSlideIndex(slideIndex => slideIndex < dataSlider.length - 1 ? slideIndex + 1 : 0)
        }, 4000)
    }

    const stopSlideTimer = () => {
        if (slideInterval.current) {
            clearInterval(slideInterval.current)
        }
    }
    useEffect(() => {
        return () => stopSlideTimer()
    }, [])

    const nextSlide = () => {
        startSlideTimer()
        const index = slideIndex < dataSlider.length - 1 ? slideIndex + 1 : 0;
        setSlideIndex(index)

    }

    const prevSlide = () => {
        startSlideTimer()
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
                    <div key={obj.id} className={slideIndex === index + 0 ? "slide active-anim" : "slide"}
                        onMouseEnter={stopSlideTimer} onMouseOut={startSlideTimer}>
                        <img src={process.env.PUBLIC_URL + `/Images/img${index + 0}.jpg`}
                            alt="" />
                        <Link to={`${obj.url}`} className="slideTitre">{obj.titre}
                        </Link>
                    </div>
                )
            })}
            <BtnSlider moveSlide={nextSlide} direction={"next"} />
            <BtnSlider moveSlide={prevSlide} direction={"prev"} />
            <div className="container-dots">
                {Array.from({ length: 5 }).map((item, index) => (
                    <div onClick={() => moveDot(index + 0)} className={slideIndex === index + 0 ? "dot active" : "dot"}></div>
                ))}
            </div>

        </div>
    )
}



export default Slider