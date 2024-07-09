import "../styles/Skills.css";

//Images
import html from "../assets/Skills Icons/html.png";
import css from "../assets/Skills Icons/css.png";
import js from "../assets/Skills Icons/js.png";
import react from "../assets/Skills Icons/react.png";
import node from "../assets/Skills Icons/node.png";
import mongo from "../assets/Skills Icons/mongo.png";
import express from "../assets/Skills Icons/express.png";
import next from "../assets/Skills Icons/next.png";
import ts from "../assets/Skills Icons/ts.png";
import cpp from "../assets/Skills Icons/cpp.png";
import python from "../assets/Skills Icons/python.png";
import docker from "../assets/Skills Icons/docker.png";
import mysql from "../assets/Skills Icons/mysql.png";
import postgres from "../assets/Skills Icons/postgres.png";
import tailwind from "../assets/Skills Icons/tailwind.png";
import go from "../assets/Skills Icons/go.png";

//Components
import TechStack from "../components/TechStack";

const Skills = () => {
  const lang = [
    {
      icon: cpp,
      name: "C++",
    },
    {
      icon: python,
      name: "Python",
    },
    {
      icon: js,
      name: "JavaScript",
    },
    {
      icon: go,
      name: "Go",
    }
  ];
  const frontend = [
    {
      icon: html,
      name: "HTML",
    },
    {
      icon: css,
      name: "CSS",
    },
    {
      icon: react,
      name: "React",
    },
    {
      icon: next,
      name: "Next.js",
    },
    {
      icon: ts,
      name: "TypeScript",
    },
    {
      icon: tailwind,
      name: "Tailwind CSS",
    },
  ];
  const backend = [
    {
      icon: node,
      name: "Node.js",
    },
    {
      icon: express,
      name: "Express.js",
    },
  ];
  const db = [
    {
      icon: mongo,
      name: "MongoDB",
    },
    {
      icon: mysql,
      name: "MySQL",
    },
    {
      icon: postgres,
      name: "PostgreSQL",
    },
  ];
  const devops = [
    {
      icon: docker,
      name: "Docker",
    },
  ];

  return (
    <div className="page">
      <div className="skills">
        <div className="skilltype">
          <p>Programming Languages</p>
          <div className="skillButtons">
            {lang.map((icon, i) => (
              <TechStack icon={icon.icon} name={icon.name} key={i} />
            ))}
          </div>
        </div>

        <div className="skilltype">
          <p>Frontend Development</p>
          <div className="skillButtons">
            {frontend.map((icon, i) => (
              <TechStack icon={icon.icon} name={icon.name} key={i} />
            ))}
          </div>
        </div>

        <div className="skilltype">
          <p>Backend Development</p>
          <div className="skillButtons">
            {backend.map((icon, i) => (
              <TechStack icon={icon.icon} name={icon.name} key={i} />
            ))}
          </div>
        </div>

        <div className="skilltype">
          <p>Database</p>
          <div className="skillButtons">
            {db.map((icon, i) => (
              <TechStack icon={icon.icon} name={icon.name} key={i} />
            ))}
          </div>
        </div>

        <div className="skilltype">
          <p>DevOps</p>
          <div className="skillButtons">
            {devops.map((icon, i) => (
              <TechStack icon={icon.icon} name={icon.name} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
