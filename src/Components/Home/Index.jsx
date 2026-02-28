import React, { useContext } from "react";
import HomeStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

const Home = () => {

  const { basename } = useContext(MyContextForBasenameValue);

  return (
    <HomeStyle>
      <div className="HomePage-Card HomePage-Presentation">
        <div className="HomePage-Presentation__Texte">
          <div className="HomePage-Presentation__Texte-First-Part">
            <h2>Je suis <strong>Domitille REGNAULT</strong>.</h2>
            <p>Je suis <strong>chargée d'études CVC / HVAC</strong></p>
            <p>mais aussi <strong>développeuse</strong> web <strong>full stack</strong>.</p>
            <div><img className="HomePage-Presentation__Hand" src={`${basename}/Pictures/hand-checking.png`} alt='Main saluant' /></div>
          </div>
          <div className="HomePage-Presentation__Texte-Second-Part">
            <h3>Bienvenue sur mon Porte-folio en ligne!</h3>
            <p><img className="HomePage-Presentation__Bullet" src={`${basename}/Pictures/energy.png`} alt='Energie' />
              Coté pile j'accompagne les collectivités dans leur transition écologique.</p>
            <p>Mes spécialités sont le <em>chauffage</em>, la <em>ventilation</em>, la <em>plomberie</em> et les <em>energies renouvelables</em>.</p>
            <br></br>
            <p><img className="HomePage-Presentation__Bullet" src={`${basename}/Pictures/computer.png`} alt='Ordinateur' />
              Coté face, je créé des <em>sites internets</em> et des <em>applications web.</em></p>
            <p>Mes technologies de prédilections c'est <em>ReactJS</em> / <em>Javascript</em> coté <em>front-end</em> et <em>Node</em> coté <em>back-end</em>.</p>
            <br></br>
            <p>Ma double expertise me permettent de proposer des solutions techniques innovantes pour analyser au mieux les besoins de vos clients.
              <br></br>
              <br></br>
              J'image l'<em>architecture</em> de demain. Celle de vos bâtiments comme celle de votre site internet.
              <br></br>
              <br></br>
              Etonné par mon profil atypique ?
              <br></br>
              <br></br>
              Alors découvrez mon parcours et mes réalisations.</p>
          </div>
        </div>
        <img src={`${basename}/Pictures/Illustration_Ordinateur.jpg`} alt='Developpeuse utilisant un ordinateur portable' />
      </div>

      <div className="HomePage-Card HomePage-Competences">
        <div className="HomePage-Competences__Titre">
          <h2> Mes compétences techniques dans le web.</h2>
          <p>MAJ 2024</p>
        </div>
        <div className="HomePage-Competences__Tags">
          <ul>
            <li><strong>HTML5</strong></li>
            <li><strong>CSS</strong></li>
            <li><strong>SASS</strong></li>
            <li><strong>Responsive Design</strong></li>
            <li><strong>W3C</strong></li>
            <li><strong>Figma</strong></li>
          </ul>
          <p>Je maîtrise la mise en page responsive, l'utilisation de balises sémantiques, l'intégration de médias et la mise en animations des contenus à partir d'une maquette numérique ou non.</p>
        </div>
        <div className="HomePage-Competences__Tags">
          <ul>
            <li><strong>GIT</strong></li>
            <li><strong>GitHub</strong></li>
          </ul>
          <p>J'utilise github pour versionner et suivre mes projets.</p>
        </div>
        <div className="HomePage-Competences__Tags">
          <ul>
            <li><strong>Javascript</strong></li>
            <li><strong>React</strong></li>
          </ul>
          <p>Je me base sur des outils et frameworks front-end pour créer des site dynamiques et évolutifs</p>
        </div>
        <div className="HomePage-Competences__Tags">
          <ul>
            <li><strong>API Rest</strong></li>
            <li><strong>Node.js</strong></li>
            <li><strong>Express</strong></li>
            <li><strong>MongoDB</strong></li>
          </ul>
          <p>Coté back-end, je code des interfaces sécurisées et efficaces dans leurs requêtes vers les bases de données NoSQL.</p>
        </div>
        <div className="HomePage-Competences__Tags">
          <ul>
            <li><strong>SEO</strong></li>
            <li><strong>Accessibilité</strong></li>
            <li><strong>Cyber-sécurité</strong></li>
          </ul>
          <p>Mes compétences transverses me permettent d'être efficace et de sécuriser vos données.</p>
        </div>
      </div >
    </HomeStyle >
  );
}

export default Home;