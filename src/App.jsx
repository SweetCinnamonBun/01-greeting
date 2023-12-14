import "./App.css";
import jani from "./images/jani.jpeg";
import pekka from "./images/pekka.jpeg";
import maya from "./images/maya.jpeg";

console.log(jani);
const Footer = () => {
  return (
    <div className="footer">
      greeting app created by
      <a href="https://github.com/SweetCinnamonBun">SweetCinnamonBun</a>
    </div>
  );
};

const Greetings = ({ persons }) => {
  return (
    <>
      <div className="greeting">
        {persons.map((x) => {
          return <Hello key={x.name} person={x} />;
        })}
      </div>
    </>
  );
};

const Hello = ({ person }) => {
  return (
    <div>
      <figure>
        <img src={person.img} />
      </figure>

      <p>Name: {person.name}</p>
      <p>Age: {person.age}</p>
      <p>Job: {person.job}</p>
      <p>University: {person.university}</p>
      <p>Description: {person.description}</p>
    </div>
  );
};

const App = () => {
  const persons = [
    {
      name: "Maya",
      img: maya,
      age: 23,
      job: "Software developer",
      "work experience in years": 2,
      university: "University of Helsinki",
      description:
        "Hello I am Maya. I'm 23 years old and I am a Software developer. I love software development since it gives me sleep deprivation and a nice amount of headaches.",
    },
    {
      name: "Pekka",
      img: pekka,
      age: 33,
      job: "Network Engineer",
      "work experience in years": 5,
      university: "Campridge University",
      description:
        "Hello I am Pekka. I'm 33 years old and I am a network engineer. Network engineering has always been my passion. I love to hack people's websites",
    },
    {
      name: "Jani",
      img: jani,
      age: 44,
      job: "Cloud Engineer",
      "work experience in years": 10,
      university: "Universtiy of Lappi",
      description:
        "Hello I am Jani, I'm 44 years old and I am a Cloud Engineer. Cloud is the best.",
    },
  ];

  return (
    <div>
      <h1>Greetings</h1>
      <Greetings persons={persons} />
      <Footer />
    </div>
  );
};
export default App;
