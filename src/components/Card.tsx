import { useEffect, useRef, useState } from 'react';
import './Card.scss';

export interface CardProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

export default function Card(props: CardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const pRef = useRef(null);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          setIsExpanded(false);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (pRef.current) {
      observer.observe(pRef.current);
    }

    return () => {
      if (pRef.current) observer.unobserve(pRef.current);
    };
  }, []);

  return (
    <div className="card">
      <img className="card-image" src={props.image} />
      <div className="card-content">
        <a className="link" href={props.link} target="_new">
          <h3>
            {props.title}
            <img src="/link.svg"></img>
          </h3>
        </a>
        <p ref={pRef} className={isExpanded ? 'expanded' : ''} onClick={toggleExpand} style={{ cursor: 'pointer' }}>
          {props.description}
        </p>
        <div className={`read-more ${isExpanded ? 'expanded' : ''}`} onClick={toggleExpand}>
          {isExpanded ? 'Read less' : 'Read more'}
          <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#000" viewBox="0 0 16 16">
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
