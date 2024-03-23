import React, { useContext } from "react";
import HomeStyle from "./Style.jsx";

import { MyContextForBasenameValue } from '../../index.js';

const Home = () => {

  const basename = useContext(MyContextForBasenameValue);

  return (
    <HomeStyle>
      <div className="HomePage-Card HomePage-Presentation">
        <div className="HomePage-Presentation__Texte">
          <h2>Je suis <strong>Domitille REGNAULT</strong>.</h2>
          <p>Je suis <strong>développeuse</strong> web <strong>full stack</strong>.</p>
          <div><img className="HomePage-Presentation__Hand" src={`${basename}/Pictures/hand-checking.png`} alt='Main saluant' /></div>
          <h3>Bienvenue sur mon Porte-folio en ligne!</h3>
          <p>Je suis spécialisée en <em>ReactJS</em> et <em>Javascript</em> coté <em>front-end</em> et en <em>Node</em> coté <em>back-end</em>.
            <br></br>
            <br></br>
            Ces qualifications me permettent de proposer des solutions techniques innovantes qui optimisent l'<em>expérience utilisateur</em> de A à Z.
            <br></br>
            <br></br>
            J'analyse vos besoins client, j'imagine une architecture fluide et moderne puis je code tout ça pour obtenir un site internet complet.
            <br></br>
            <br></br>
            Envie d'en savoir plus ?
            <br></br>
            <br></br>
            Alors découvrez mon parcours et mes réalisations.
          </p>
        </div>
        <img src={`${basename}/Pictures/Illustration_Ordinateur.jpg`} alt='Developpeuse utilisant un ordinateur portable' />
      </div>

      <div className="HomePage-Card HomePage-Competences">
        <div className="HomePage-Competences__Titre">
          <h2> Mes compétences techniques.</h2>
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