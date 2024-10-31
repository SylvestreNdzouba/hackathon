import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const ArticlesSection = () => {
  const textRef = useRef(null);

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30vh",
          marginLeft: "50px",
        }}
      >
        <div
          className="titleArticle"
          style={{
            color: "white",
            fontSize: "8vh",
            fontWeight: "1000",
            lineHeight: "0.9",
          }}
        >
          LA BAGUE DE VOS
          <br /> PASSION, LA
          <br /> FLAMME DE VOS
          <br /> ILLUSION
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/DuoHF.png">
            {/* Ajout d'un texte ou d'une image pour rendre le lien visible */}
            <img
              src="/DuoHF.png"
              alt="Duo HF"
              style={{ height: "576px", width: "451px" }} // Définir les dimensions ici
            />
          </a>
        </div>
        <div style={{ textAlign: "right", width: "290px", height: "240px" }}>
          Dans ce monde d&apos;éphémères, Molten incarne la beauté précieuse de
          l'instant. Symbole d'un amour en fusion, elle unit la chaleur d'une
          flamme et l&apos;élégance intemporelle d&apos;un anneau, faisant
          d&apos;elle une pièce aussi rare qu&apos;audacieuse pour célébrer vos
          fiançailles. C&apos;est l'intensité d'une promesse, forte et
          transitoire, comme l&apos;attente d&apos;un mariage : un moment
          exaltant, un prélude vibrant, avant la solidité de l&apos;engagement.
          Un trésor lumineux, qui s&apos;enflamme et fond, comme l&apos;amour
          que vous jurerais à l&apos;infini.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30vh",
          marginLeft: "50px",
        }}
      >
        {/* Utilisation de Flexbox */}
        <div
          className="titleArticle"
          style={{
            color: "white",
            fontSize: "8vh",
            fontWeight: "1000",
            lineHeight: "0.9",
          }}
        >
          L'ACCESSOIRE
          <br />
          INTEMPOREL
          <br />
          QUI FAIT FONDRE
          <br /> VOTRE TEMPS
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/vans.png">
            {/* Ajout d'un texte ou d'une image pour rendre le lien visible */}
            <img
              src="/vans.png"
              alt="Duo HF"
              style={{ height: "576px", width: "451px" }} // Définir les dimensions ici
            />
          </a>
        </div>
        <div style={{ textAlign: "right", width: "290px", height: "240px" }}>
          Et si le simple geste de minuter vos pâtes devenait une expérience
          élégante, sensorielle, et résolument chic ? Plus qu&apos;un minuteur,
          cette flamme poétique transforme vos moments d&apos;attente en rituels
          séduisants et artistique. Chaque flamme de Molten incarne un temps
          suspendu, un luxe quotidien qui ajoute une touche de beauté et de
          sophistication à la moindre de vos activités. Avec Molten, cuisiner
          n&apos;a jamais été aussi raffiné.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30vh",
          marginLeft: "50px",
        }}
      >
        {/* Utilisation de Flexbox */}
        <div
          className="titleArticle"
          style={{
            color: "white",
            fontSize: "8vh",
            fontWeight: "1000",
            lineHeight: "0.9",
          }}
        >
          LA SIGNATURE
          <br /> EPHEMERE DE
          <br /> L&apos;ELEGANCE
          <br /> ETERNELLE
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/FLunettes.png">
            {/* Ajout d'un texte ou d'une image pour rendre le lien visible */}
            <img
              src="/FLunettes.png"
              alt="Duo HF"
              style={{ height: "576px", width: "451px" }} // Définir les dimensions ici
            />
          </a>
        </div>
        <div style={{ textAlign: "right", width: "290px", height: "240px" }}>
          Ce délicat tatouage, marque éphémère de votre audace, incarne
          l'intensité d'une passion fugace Cette bague d&apos;exception se
          distingue par son luxe sensoriel. Elle insuffle à votre peau un
          souvenir, une trace mystérieuse, comme un secret partagé entre vous et
          l'instant. Dans un monde où tout est normé, Molten vous offre une
          expérience unique et hors du commun, alliant audace et sophistication,
          pour les âmes en quête d&apos;extraordinaire.
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
          marginTop: "30vh",
          marginLeft: "50px",
        }}
      >
        {/* Utilisation de Flexbox */}
        <div
          className="titleArticle"
          style={{
            color: "white",
            fontSize: "8vh",
            fontWeight: "1000",
            lineHeight: "0.9",
          }}
        >
          L&apos;AURA
          <br /> OLFACTIVE D&apos;UN
          <br /> LUXE EN FUSION
        </div>
        <div style={{ textAlign: "center" }}>
          <a href="/Fleurs.png">
            {/* Ajout d'un texte ou d'une image pour rendre le lien visible */}
            <img
              src="/Fleurs.png"
              alt="Duo HF"
              style={{ height: "576px", width: "451px" }} // Définir les dimensions ici
            />
          </a>
        </div>
        <div style={{ textAlign: "right", width: "290px", height: "240px" }}>
          Habillez vos accessoires de tout les sens. Molten diffuse une
          fragrance envoûtante qui s&apos;imprègne dans l&apos;air, enveloppant
          vos sens et votre environnement d&apos;un halo raffiné. Plus
          qu&apos;un simple bijou, c&apos;est une expérience olfactive unique. À
          mesure que la cire fond, ses notes parfumées révèlent un bouquet
          soigneusement composé, rappelant la complexité d&apos;une émotion ou
          la richesse d&apos;un souvenir. C&apos;est un luxe insaisissable,
          comme le souvenir que son odeur laissera.
        </div>
      </div>
    </>
  );
};

export default ArticlesSection;
