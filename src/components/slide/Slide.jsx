import React, { useState, useRef, useEffect } from "react";
import "./slide.css";

const delay = 2000;
const SlideContent = ({ props }) => {
  return (
    <div className="slide-content">
      <p
        className="backgroundIcon"
        style={{ textAlign: "left", paddingTop: "20px" }}
      >
        “
      </p>
      <p className="tofront" style={{ top: "-20px" }}>
        {props.review}
      </p>
      <p className="backgroundIcon" style={{ textAlign: "right" }}>
        ”
      </p>
      <div>
        <div>
          <img
            src={require(`../../assets/testimonial_face0${props.id}.png`)}
            alt="blog_image"
          />
        </div>
        <h1>{props.name}</h1>
        <h2>{props.position}</h2>
      </div>
    </div>
  );
};

const Slide = ({ clients }) => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === clients.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
      <div className="slideshow">
        <div className="slideshowSlider">
          {clients.map((item, idx) => (
            <div className={`slide${index === idx ? " active" : ""}`} key={idx}>
              <SlideContent props={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="slideshow-small">
        <div
          className="slideshowSlider-small"
          style={{ transform: `translate3d(${-index * 101}%, 0, 0)` }}
        >
          {clients.map((item, index) => (
            <div className="slide-small" key={index}>
              <SlideContent props={item} />
            </div>
          ))}
        </div>
      </div>

      <div className="slideshowDots">
        {clients.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </>
  );
};

export default Slide;
