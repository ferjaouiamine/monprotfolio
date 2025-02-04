import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Développeur Full Stack ", "Développeur WordPress"],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">BIENVENUE DANS MON UNIVERS</h4>
        <h1 className="text-6xl font-bold text-white">
        Salut, je suis <span className="text-designColor capitalize">Ferjaoui Mohamed Amine</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
           <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Récemment diplômé en ingénierie informatique, je suis passionné par le développement web et les nouvelles technologies. Mon parcours académique m'a permis d'acquérir une solide expertise en programmation (JavaScript, Java, PHP, SQL, etc.), en développement web avec des frameworks modernes (React, Angular, Spring Boot) et en gestion de bases de données (MySQL, Oracle, MongoDB). J'ai également eu l'opportunité d'effectuer plusieurs stages, notamment dans le développement d'applications web de gestion de projets et de ressources humaines, en utilisant des technologies comme .NET, Node.js et React.js. Fort d'une expérience pratique en entreprise et de plusieurs projets académiques
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner