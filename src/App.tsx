import Section from './components/Section';
import './App.scss';
import { useRef, MutableRefObject } from 'react';
import { CardProps } from './components/Card';

function App() {
  const appCards: CardProps[] = [
    {
      title: 'AutoGrader',
      image: '/grader.png',
      link: 'https://github.com/devops329/autograder',
      description: "React + TS grader for BYU's CS 329 course",
    },
    {
      title: 'FloorMaps',
      image: '/floormaps.png',
      link: 'https://lib.byu.edu/floormaps/',
      description: 'Angular front end for BYU Library floor maps',
    },
    {
      title: 'Alphabetic Browse',
      image: '/alphabrowse.png',
      link: 'https://lib.byu.edu/browse/',
      description: 'Angular front end for BYU Library Alphabetic Browse',
    },
  ];
  const colabCards: CardProps[] = [
    {
      title: 'CS 329: QA and DevOps',
      image: '/cs329.png',
      link: 'https://github.com/devops329/devops/blob/main/instruction/modules.md',
      description: "Coauthored a class for BYU's CS program",
    },
    {
      title: 'BYU Library Search',
      image: '/search.png',
      link: 'https://lib.byu.edu/search/',
      description: 'Migrated key features to Angular',
    },
  ];
  const section1 = useRef<HTMLDivElement | null>(null);
  const section2 = useRef<HTMLDivElement | null>(null);
  const section3 = useRef<HTMLDivElement | null>(null);
  function scrollTo(section: MutableRefObject<HTMLDivElement | null>) {
    section.current?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className="container">
      <div ref={section1}>
        <Section image="/timp.jpg" headline="Hi, I'm Stephen!" scrollTo={scrollTo} goToSectionRef={section2} last={false} subImage="/stephen.jpg" />
      </div>
      <div ref={section2}>
        <Section image="/road.jpg" headline="I've built some apps..." scrollTo={scrollTo} goToSectionRef={section3} last={false} cards={appCards} />
      </div>
      <div ref={section3}>
        <Section
          image="/byu.jpg"
          headline="And helped on some projects."
          scrollTo={scrollTo}
          goToSectionRef={section1}
          last={true}
          cards={colabCards}
        />
      </div>
    </div>
  );
}

export default App;
