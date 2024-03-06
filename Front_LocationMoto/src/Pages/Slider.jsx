import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { slidMoto } from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../Style/Slider.css';


const Slider = ({ phoRef }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleChange = (index) => {
    setCurrentSlide(index);
  };

  const handlePrevClick = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    } else {
      setCurrentSlide(slidMoto.length - 1);
    }
    

  };
  console.log("Current Slide after prev click:", currentSlide);

  const handleNextClick = () => {
    if (currentSlide < slidMoto.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };

  return (
    <div ref={phoRef}>
      
        <Carousel showThumbs={false} showStatus={false} showIndicators={false} emulateTouch onChange={handleChange} selectedItem={currentSlide}>
          {slidMoto.map((item, index) => (
            <div key={index} className="slide">
              <div className="imgContainer">
                <img src={item.img} alt={`Slide ${index}`} />
              </div>
              <div className="infocontainer">
                <div className="title">{item.title}</div>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="slider-container">
        <div className="arrow left" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </div>
        <div className="arrow right" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </div>
    </div>




  );
};

export default Slider;