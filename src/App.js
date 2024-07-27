import React, { useState, useEffect } from 'react';
import './style.css';

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    { id: 1, src: "/img/watch-slides1.jpeg" },
    { id: 2, src: "/img/watch-slide2.jpeg" },
    { id: 3, src: "/img/watch-slide3.jpeg" },
    { id: 4, src: "/img/watch-slide4.jpeg" },
    { id: 5, src: "/img/watch-slider5.jpeg" }
  ];

  const extendedSlides = [...slides, ...slides]; // Duplicate slides for seamless effect

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setCurrentIndex(prevIndex => (prevIndex + 1) % slides.length);
      }
    }, 3000); // Adjust the timing for the slider speed

    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <div className="App">
      <nav className="navbar">
        <img src="/Logo1.png" className="logo" alt="Logo" />
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Men</a></li>
          <li><a href="#">Women</a></li>
          <li><a href="#">Buyer Protection</a></li>
        </ul>
        <button className="cta" role="button">Contact</button>
      </nav>

      <div className="slide-container">
        <div
          className={`image-slider ${isHovered ? 'paused' : ''}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {extendedSlides.map((slide, index) => (
            <div
              className="slides-div"
              key={slide.id}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={slide.src}
                alt={`Slide ${slide.id}`}
                className={`img ${hoveredIndex === index ? 'hovered' : ''}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
