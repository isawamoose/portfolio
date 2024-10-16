import { MutableRefObject } from 'react';
import './Section.scss';
import { CardProps } from './Card';
import Carousel from './Carousel';

interface Props {
  headline: string;
  image: string;
  last: boolean;
  scrollTo: (section: MutableRefObject<HTMLDivElement | null>) => void;
  goToSectionRef: MutableRefObject<HTMLDivElement | null>;
  subImage?: string;
  cards?: CardProps[];
}

export default function Section(props: Props) {
  return (
    <div className={'section' + (props.cards ? ' has-carousel' : '')}>
      <img className="bg-image" src={props.image} alt="Background" />
      <h2>{props.headline}</h2>
      {props.subImage && <img className="sub-image" src={props.subImage} alt="Side" />}
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
