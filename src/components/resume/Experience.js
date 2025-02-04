import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";
import { i1} from '../../assets'; // Import your images
import { i2} from '../../assets'; // Import your images
import { i3} from '../../assets'; // Import your images



const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex flex-col gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]"></p>
          <h2 className="text-4xl font-bold">Experience</h2>
        </div>
        <div className="mt-14 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="Développeur - Stage
 "
            subTitle=" LEADERPOS, Tunisie"
            result="09/2021 – 10/2021"
            location="Tunisie"
            des="  Développement d'une application web e-commerce"
            logo={i2} 
          />
          
          <ResumeCard
            title="Développeur - Stage"
            subTitle="LEADERPOS, Tunisie"
            result=" 01/2022 – 02/2022"
            des="Développement d'une application web de réservation de vols"
            location="Tunisie"
            logo={i2} 
          />
          
          <ResumeCard
            title=" Projet de fin d'études - Stage"
            subTitle="
 Alfa computers, Tunisie"
            result=" 02/2022 – 06/2022"
            des="Développement d’une application web pour un système d’enseignement en ligne"
            location="Tunisie"
            logo={i3} 
          />
          
          <ResumeCard
            title="Développeur - Stage
 "
            subTitle="
 Run-IT, Tunisie"
 des="Développement d’une application web de gestion des ressources humaines au sein d’une entreprise"
            result=" 08/2024 – 09/2024"
            location="Tunisie"
            logo={i1} 
          />
          
          <ResumeCard
            title="Développeur - Stage"
         subTitle="
 Run-IT, Tunisie"
            result=" 10/2024 – 12/2024"
            
            des="Développement d’une application web de gestion de projets"
            location="Tunisie"
            logo={i1} 
          />
          
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
