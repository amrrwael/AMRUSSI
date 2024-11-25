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
      <div className="container">
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
      </div>

      <div className="Main">
  <img src="/Main2.jpg" className="MainPhoto" alt="MainPhoto" />
  <div className="shop-now-container">
    <p className="shop-now-text">
      Explore the latest arrivals in fashion. <br />
      Modern elegance meets timeless style.
    </p>
    <button className="shop-now-btn">Shop Now</button>
  </div>
</div>

<div className="About-us">
  <h2 className="about-us-title">About Us</h2>
  <p className="about-us-description">
    Aren't we in 2077 already?  we bring 
    you designs inspired by <strong>tomorrow</strong> but crafted for <strong>today</strong>. Step into the world where innovation meets style, 
    and redefine your wardrobe with timeless yet futuristic pieces.
  </p>
  <div className="about-us-features">
    <div className="feature-card">
      <img src="/tech-icon.png" alt="Advanced Tech" className="feature-icon" />
      <h3>Advanced Technology</h3>
      <p>Our designs are created using cutting-edge technology to deliver futuristic elegance.</p>
    </div>
    <div className="feature-card">
      <img src="/sustainability.png" alt="Sustainability" className="feature-icon" />
      <h3>Sustainability</h3>
      <p>Fashion that cares for the planet—crafted with eco-friendly and renewable materials.</p>
    </div>
    <div className="feature-card">
      <img src="/vision-icon.png" alt="Visionary Design" className="feature-icon" />
      <h3>Visionary Design</h3>
      <p>Get ready to experience designs that blend futuristic aesthetics with modern-day practicality.</p>
    </div>
  </div>
</div>


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
