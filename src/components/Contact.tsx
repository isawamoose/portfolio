import './Contact.scss';

interface Contact {
  image: string;
  link: string;
  text: string;
}

export default function Contact() {
  const contacts: Contact[] = [
    {
      image: '/linkedin.svg',
      link: 'https://www.linkedin.com/in/stephen-amos/',
      text: 'Stephen Amos',
    },
    {
      image: '/email.svg',
      link: 'mailto:amos.stephen.m@gmail.com',
      text: 'amos.stephen.m@gmail.com',
    },
    {
      image: '/phone.svg',
      link: 'tel:8015001625',
      text: '(801) 500-1625',
    },
  ];
  return (
    <div className="contacts">
      {contacts.map((contact, index) => (
        <div key={index} className="contact">
          <img src={contact.image} alt={contact.text} />
          <a href={contact.link} target="_blank" rel="noreferrer">
            {contact.text}
          </a>
        </div>
      ))}
    </div>
  );
}
