import { MutableRefObject, useEffect, useRef, useState } from 'react';
import './Section.scss';
import { CardProps } from './Card';
import Carousel from './Carousel';
import Contact from './Contact';

interface Props {
  headline: string;
  image: string;
  last: boolean;
  scrollTo: (section: MutableRefObject<HTMLDivElement | null>) => void;
  goToSectionRef: MutableRefObject<HTMLDivElement | null>;
  subImage?: string;
  subText?: string[];
  contact?: boolean;
  cards?: CardProps[];
}

export default function Section(props: Props) {
  const [isVisible, setIsVisible] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const h2Ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && imagesLoaded) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      if (h2Ref.current) observer.unobserve(h2Ref.current);
    };
  }, [imagesLoaded]);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  return (
    <div className={'section' + (props.cards ? ' has-carousel' : '')}>
      <img className="bg-image" src={props.image} alt="Background" onLoad={handleImageLoad} />
      <h2 ref={h2Ref} className={isVisible ? 'h2-visible' : 'h2-hidden'}>
        {props.headline}
      </h2>
      {props.subImage && <img className="sub-image" src={props.subImage} alt="Side" onLoad={handleImageLoad} />}
      {props.subText && (
        <div className="sub-text">
          <ul>
            {props.subText.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        </div>
      )}
      {props.contact && <Contact />}
      {props.cards && <Carousel cards={props.cards} />}
      <div className="navigation">
        <button
          className={'arrow' + (props.last ? ' up' : '')}
          onClick={() => {
            props.scrollTo(props.goToSectionRef);
          }}>
          {props.last ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z" />
              <path fillRule="evenodd" d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#fff" viewBox="0 0 16 16">
              <path
                fillRule="evenodd"
                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}
