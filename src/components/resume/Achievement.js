import React, { useState } from 'react';
import Slider from "react-slick";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";
import { 
  laravelLogo, 
  angularLogo, 
  nodejsLogo, 
  expressLogo, 
  mongodbLogo, 
  htmlLogo, 
  cssLogo, 
  jsLogo, 
  codeigniterLogo, 
  mysqlLogo, 
  figmaLogo,
  python,talen,  sql  , PostgreSQL ,flask,reactLogo,springlogo

  
} from "../../assets";
import Title from '../layouts/Title';
import { work1 } from '../../assets';
import { work2 } from '../../assets';
import { work3 } from '../../assets';
import { work4 } from '../../assets';
import { work5 } from '../../assets';
import { work6 } from '../../assets';
import { work7 } from '../../assets';
// import {springlogo} from '../../assets';
// SampleNextArrow component
function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 right-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowRight />
    </div>
  );
}

// SamplePrevArrow component
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="w-14 h-12 bg-[#0c1821] hover:bg-black duration-300 rounded-md text-2xl text-gray-400 flex justify-center items-center absolute top-1/2 left-0 transform -translate-y-1/2 shadow-shadowOne cursor-pointer z-10"
      onClick={onClick}
    >
      <HiArrowLeft />
    </div>
  );
}

// Testimonial component
const Testimonial = () => {
  const [dotActive, setDocActive] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (prev, next) => {
      setDocActive(next);
    },
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
        }}
      >
        <ul
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "12px",
                height: "12px",
                background: "#ff014f",
                borderRadius: "50%",
                cursor: "pointer",
              }
            : {
                width: "12px",
                height: "12px",
                background: "gray",
                borderRadius: "50%",
                cursor: "pointer",
              }
        }
      ></div>
    ),
  };

  return (
    <section
      id="testimonial"
      className="w-full py-20 border-b-[1px] border-b-black relative"
    >
      <div className="flex justify-center items-center text-center mb-8">
        <Title title="" des="My projects" />
      </div>
      <div className="max-w-6xl mx-auto relative">
        <Slider {...settings}>

          {/* Slide 1: Personal Portfolio */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work5} alt="Personal Portfolio" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                  Un système d’enseignement en ligne avec la Visioconférence

                </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  J'ai créé une application web avec la stack MERN (MongoDB, Express.js, React, Node.js).
J'ai mis en place un système de connexion sécurisé pour les étudiants et les enseignants.
L'application permet de créer, gérer et suivre des cours et des modules facilement.
J'ai utilisé MongoDB pour stocker les données des utilisateurs, des cours et des sessions.
Un tableau de bord interactif permet aux utilisateurs de suivre leurs progrès.
L'application fonctionne bien sur les ordinateurs, tablettes et téléphones.
           </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={reactLogo} alt="Laravel Logo" className="w-12 h-12" />
                      <img src={mongodbLogo}  className="w-12 h-12" />
                      <img src={expressLogo}  className="w-12 h-12" />
                      <img src={nodejsLogo}  className="w-12 h-12" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 2: CRA (Compte Rendu d'Activité) */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work6} alt="CRA Project" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
                  Gestion Resource Humaine                </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  La gestion des ressources humaines (GRH) joue un rôle crucial dans la réussite des entreprises modernes. Avec la croissance rapide des organisations et la complexité croissante des processus RH, la nécessité d’un système efficace et intégré est devenue évidente. Une gestion optimisée des ressources humaines permet de rationaliser les processus administratifs, d'améliorer la productivité des équipes et de garantir une meilleure conformité aux exigences légales.        </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl  font-semibold justify-center mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                    <img src={reactLogo} alt="Laravel Logo" className="w-12 h-12" />
                    <img src={work1} className="w-12 h-12" />
                    <img src={jsLogo} alt="Node.js Logo" className="w-12 h-12" />

                      <img src={mysqlLogo}  className="w-12 h-12" />
                      <img src={sql}  className="w-12 h-12" />
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 3: Employees' Mood */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work7} alt="Employees' Mood" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">
Device Lab (Ecommerce project)
                    </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  devicelab.it est une plateforme e-commerce dédiée à la vente de téléphones portables. Le site permet aux utilisateurs de parcourir une large gamme de smartphones, de comparer les caractéristiques techniques, et de passer des commandes en toute simplicité.

Catalogue de Produits : Présentation de divers modèles de téléphones avec des descriptions détaillées, des images haute qualité, et des spécifications techniques.
Recherche et Filtrage : Fonctionnalité de recherche avancée et filtres pour trouver rapidement le modèle souhaité selon la marque, le prix, ou les fonctionnalités.
Interface Intuitive : Design moderne et responsive, assurant une expérience utilisateur fluide sur ordinateurs, tablettes et smartphones.
Panier et Paiement Sécurisé : Gestion du panier d’achat et intégration de solutions de paiement sécurisé pour des transactions rapides et fiables.
Gestion des Commandes : Suivi des commandes en temps réel avec des notifications sur l’état de la livraison.
Service Client : Support client intégré pour répondre aux questions des utilisateurs et assurer un service après-vente <efficace className=""></efficace>        </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                      <img src={cssLogo} alt="Angular Logo" className="w-12 h-12" />
                      <img src={jsLogo} alt="Node.js Logo" className="w-12 h-12" />
                      <img src={htmlLogo} alt="Express.js Logo" className="w-12 h-12" />
                      <img src={flask} alt="MongoDB Logo" className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide 4: Project Khedma */}
          <div className="flex justify-center">
            <div className="flex justify-center items-center w-full md:w-[60%] lg:w-[50%] mx-auto">
              <div className="h-auto bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col items-start justify-center">
                <img src={work2} alt="Project Khedma" className="w-full rounded-t-lg" />
                <div className="text-left mt-4">
                  <h3 className="text-2xl justify-center font-bold">

               Fast food      </h3>
                  <p className="text-base tracking-wide text-gray-500">
                  projet mobile android studio fast-food livrasion </p>
                  {/* Technologies Used */}
                  <div className="mt-4">
                    <h4 className="text-xl justify-center font-semibold mb-2">Technologies Used:</h4>
                    <div className="bg-white p-4 rounded-lg flex gap-6 justify-center items-center">
                    <img src={work3}  className="w-12 h-12" />
                    <img src={work4}  className="w-12 h-12" />

                    <img src={sql}  className="w-12 h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          

        </Slider>
      </div>
    </section>
  );
};

export default Testimonial;
