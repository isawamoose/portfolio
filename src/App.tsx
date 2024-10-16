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
      description:
        "I built an open-source automated grader for BYU's CS329 in React and Node.js course. Serving over one hundred students each semester, it uses CAS with SAML for authentication, integrates with Github and Canvas, and has observability through Grafana.",
    },
    {
      title: 'FloorMaps',
      image: '/floormaps.png',
      link: 'https://lib.byu.edu/floormaps/',
      description:
        'I built a front end for the BYU Library floor maps, serving thousands of patrons. Built in Angular, it has a scrollable, zoomable map and is installable as a PWA.',
    },
    {
      title: 'Alphabetic Browse',
      image: '/alphabrowse.png',
      link: 'https://lib.byu.edu/browse/',
      description: 'I built a front end in Angular for BYU Library Alphabetic Browse. It is built in Angular.',
    },
  ];
  const colabCards: CardProps[] = [
    {
      title: 'CS 329: QA and DevOps',
      image: '/cs329.png',
      link: 'https://github.com/devops329/devops/blob/main/instruction/modules.md',
      description:
        'I helped write a course on Quality Assurance and DevOps that is taught at BYU to hundreds of students each year. It focuses on principles of deployment, testing, automation and observability.',
    },
    {
      title: 'BYU Library Search',
      image: '/search.png',
      link: 'https://lib.byu.edu/search/',
      description:
        'I migrated key features of an app serving thousands of library patrons to Angular. This app is central to the use of the library.',
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
          headline="And was a key contributor on some projects."
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
