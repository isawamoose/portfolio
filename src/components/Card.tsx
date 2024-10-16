import './Card.scss';

export interface CardProps {
  title: string;
  image: string;
  link: string;
  description: string;
}

export default function Card(props: CardProps) {
  return (
    <div className="card">
      <img className="card-image" src={props.image} />
      <div className="card-content">
        <a className="link" href={props.link} target="_new">
          <h3>
            {props.title}
            <img src="/src/assets/link.svg"></img>
          </h3>
        </a>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
