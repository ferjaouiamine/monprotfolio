import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Licence Nationale en Technologie de l’Informatique"
            subTitle=" Institut Supérieur des Études Technologiques, Mahdia, Tunisie "
            result="2019 - 2022"
            des="Au cours de ma formation en Technologie de l’Informatique, j'ai acquis des compétences solides en développement de logiciels, en gestion de bases de données, en réseaux informatiques et en systèmes d’information. Ce programme rigoureux m’a permis de maîtriser des concepts avancés en programmation,  ainsi qu’en gestion des infrastructures IT. J'ai également développé des compétences en modélisation de données, en optimisation des systèmes et en résolution de problèmes complexes liés aux technologies de l'information. Cette combinaison de connaissances techniques et analytiques me prépare à relever des défis variés dans le domaine de l’informatique et à contribuer efficacement à des projets technologiques innovants"
          />
           <ResumeCard
            title=" Cycle d'ingénieur en informatique
 "
            subTitle=" iTeam University, Tunisie "
            result="2022 - 2025"
            des="Au cours de mon cycle d’ingénieur en informatique, j'ai acquis des compétences approfondies en développement de logiciels, en ingénierie des systèmes, en intelligence artificielle et en gestion de bases de données. Ce programme m'a permis de maîtriser des langages de programmation tels que Python, Java et SQL, ainsi que des concepts avancés en architecture des systèmes, en algorithmique et en cybersécurité. J'ai également développé des compétences en gestion de projets informatiques, en analyse de données et en conception d’applications web et mobiles. Cette formation m’a préparé à relever des défis technologiques complexes et à concevoir des solutions innovantes adaptées aux besoins du monde professionnel."
          />
        
        </div>
      </div>
      {/* Job Experience */}
      
    
    </motion.div>
  );
}

export default Education
