import { useState } from 'react';
import Card, { CardProps } from './Card';
import './Carousel.scss';

interface Props {
  cards: CardProps[];
}

export default function Carousel(props: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (props.cards) {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % props.cards.length);
    }
  };

  const handlePrev = () => {
    if (props.cards) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? (props.cards ? props.cards.length - 1 : 0) : prevIndex - 1));
    }
  };
  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
      <div className="card-container" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {props.cards.map((card, index) => (
          <div
            className="card-wrapper"
            key={index}
            style={{
              opacity: index === currentIndex ? 1 : 0, // Only the active card is visible
              transition: 'opacity 0.2s ease-in-out', // Animation for opacity change
              pointerEvents: index === currentIndex ? 'auto' : 'none', // Disable pointer events for hidden cards
            }}>
            <Card title={card.title} image={card.image} link={card.link} description={card.description} />
          </div>
        ))}
      </div>
      <button className="carousel-button next" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" viewBox="0 0 16 16">
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    </div>
  );
}
