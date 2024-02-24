import React from "react";
import HomeStyle from "./Style.jsx";
import PropTypes from "prop-types";

function Home({ basename }) {

  return (
    <HomeStyle>
      <div className="HomePage__Card HomePage__Presentation">
        <div className="HomePage__PresentationTexte">
          <div>
            <img src={`${basename}/Pictures/Hand-checking.png`} alt='Main saluant' />
          </div>
          <h2> Bienvenue sur mon Porte-folio !</h2>
          <p>Je suis ravie de vous accueillir sur mon tout nouveau site <strong>Porte-folio</strong> ! C&apos;est l&apos;aboutissement d&apos;une année d&apos;apprentissage, d&apos;efforts et de passion pour le <strong>développement web</strong>. Sur ce site, vous découvrirez mon parcours, mes compétences et mes réalisations. Je suis impatiente de partager avec vous mon aventure dans le monde du <strong>développement</strong>, alors installez-vous confortablement et explorez mon univers ! </p>
        </div>
        <img src={`${basename}/Pictures/Illustration_Ordinateur.jpg`} alt='Personne Utilisant Un Ordinateur Portable Gris' />
      </div>

      <div className="HomePage__Card HomePage__Competences">
        <div className="HomePage__CompetencesTitre">
          <h2> Mes compétences techniques.</h2>
          <p>MAJ 2023</p>
        </div>
        <div className="HomePage__CompetencesTags">
          <ul>
            <li><strong>HTML5</strong></li>
            <li><strong>CSS</strong></li>
            <li><strong>W3C</strong></li>
            <li><strong>Figma</strong></li>
            <li><strong>SASS</strong></li>
          </ul>
          <ul>
            <li><strong>GIT</strong></li>
            <li><strong>GitHub</strong></li>
            <li><strong>Responsive Design</strong></li>
          </ul>
          <ul>
            <li><strong>Javascript</strong></li>
            <li><strong>React</strong></li>
          </ul>
          <ul>
            <li><strong>API Rest</strong></li>
            <li><strong>Node.js</strong></li>
            <li><strong>Express</strong></li>
            <li><strong>MongoDB</strong></li>
          </ul>
          <ul>
            <li><strong>SEO</strong></li>
            <li><strong>Accessibilité</strong></li>
            <li><strong>Cyber-sécurité</strong></li>
          </ul>
        </div>
      </div >

      <div className="HomePage__Card HomePage__Article">
        <div className="HomePage__CompetencesDescription">
          <h2>Petit tour des languages et frameworks.</h2>
          <h3>JavaScript</h3>
          <p>Le Pilier du Développement <strong>Front-End</strong>. C&apos;est la magie qui permet d&apos;ajouter des interactions dynamiques aux sites web. J&apos;ai une solide maîtrise de JavaScript et de ses bibliothèques, qui simplifient le développement d&apos;interfaces utilisateur réactives et interactives.</p>
          <h3>React</h3>
          <p>Mon framework préféré ! J&apos;adore l&apos;utiliser pour créer des interfaces utilisateurs réactifs et évolutifs.</p>
          <h3>Node.js</h3>
          <p>Node.js me permet de développer des applications <strong>Back-end</strong> robustes en JavaScript. J&apos;ai travaillé avec Node.js et Express.js pour créer une API RESTfull dans le cadre de ma formation.</p>
          <h3>HTML5 & CSS3</h3>
          <p>Le duo HTML5 et CSS3 est la base de tout site web. Je maîtrise la création de mises en page responsives, l&apos;utilisation de balises sémantiques, l&apos;intégration de médias et la mise en forme avancée grâce à CSS3.</p>
          <h3>SASS/CSS</h3>
          <p>Sass/SCSS est un préprocesseur CSS que j&apos;utilise pour simplifier et améliorer la gestion des styles. Il me permet de créer des feuilles de style plus modulaires, réutilisables et organisées ainsi que de petites animations et transitions.</p>
          <h3>MongoDB</h3>
          <p>MongoDB est l&apos;une des <strong>bases de données NoSQL</strong> que je maîtrise pour le stockage de données flexible et évolutif. J&apos;ai de l&apos;expérience dans la conception de schémas, la création de requêtes et la gestion de bases de données MongoDB.</p>
        </div>
      </div>

      <div className="HomePage__Card HomePage__Article">
        <div className="HomePage__ArticleTitre">
          <h2> L&apos;<strong>Accessibilité</strong> Web : Un Engagement envers l&apos;<strong>Inclusion</strong> ♿</h2>
          <div className="HomePage__PresentationDescription">
            <p>L&apos;accessibilité est bien plus qu&apos;une simple option. C&apos;est un engagement envers une expérience web inclusive pour tous les utilisateurs, quels que soient leurs besoins ou leurs capacités.
            </p><p><br></br>
              <strong>Pour l&apos;utilisateur :</strong> L&apos;accessibilité signifie que chaque individu, y compris ceux en situation de handicap, peut accéder à l&apos;information en ligne, naviguer sur un site web et interagir avec des applications. Cela élargit les horizons, permet la participation active et garantit que personne ne soit laissé de côté.
            </p><p><br></br>
              <strong>Pour le site web : </strong> Intégrer l&apos;accessibilité est une décision judicieuse. Les avantages sont multiples. Les sites web accessibles atteignent un public plus large, améliorent leur classement dans les moteurs de recherche, et renforcent leur réputation en tant qu&apos;entreprise ou organisation socialement responsable. En outre, l&apos;accessibilité peut améliorer la vitesse, la convivialité et la compatibilité avec les appareils, renforçant ainsi la qualité globale du site.
            </p><p> <br></br>
              L&apos;accessibilité est pour moi un atout majeur à inclure tout au long du processus de création web.
            </p>
          </div>
        </div>
      </div >

      <div className="HomePage__Card HomePage__Article">
        <div className="HomePage__ArticleTitre">
          <h2> <strong>Sécurité </strong>Web : Protéger Votre Site des Menaces en Ligne 🔒</h2>
        </div>
        <div className="HomePage__PresentationDescription">
          <p>La cybersécurité est plus que jamais au cœur de mes préoccupations, car les menaces en ligne ne cessent de croître. Chaque jour, des cybercriminels cherchent à exploiter des vulnérabilités pour accéder à des données sensibles et perturber des systèmes.
          </p> <p><br></br>
            <strong>L&apos;OWASP (Open Web Application Security Project)</strong> est une organisation dédiée à la sécurité des applications web qui joue un rôle essentiel de guide dans le domaine. Leurs listes des 10 principales vulnérabilités sont des ressources clés essentielles pour les développeurs et les entreprises.
          </p> <p><br></br>
            L&apos;actualité récente de la cybersécurité nous rappelle que personne n&apos;est à l&apos;abri des attaques. Des entreprises de renom aux petites start-ups, toutes sont vulnérables. Les pertes de données et les atteintes à la vie privée font d&apos;ailleurs régulièrement la une des journaux.
          </p>
        </div>
      </div>

      <div className="HomePage__Card HomePage__Article">
        <div className="HomePage__ArticleTitre">
          <h2> <strong>SEO : Le référencement web</strong>, outil essentiel de votre marketing digital. </h2>
        </div>
        <div className="HomePage__PresentationDescription">
          <p>Dans le monde numérique d&apos;aujourd&apos;hui, la visibilité en ligne est cruciale pour le succès de toute entreprise. C&apos;est là qu&apos;intervient le <strong>SEO (Search Engine Optimization) ou référencement web</strong>. C&apos;est d&apos;optimiser votre présence en ligne pour que votre site web se démarque dans les moteurs de recherche.
          </p><p> <br></br>
            En tant que développeur(se) web, j&apos;ai acquis une solide expertise en SEO, ce qui signifie que je peux vous aider à améliorer votre classement dans les résultats de recherche, à augmenter le trafic vers votre site et à atteindre un public plus large. Je maîtrise les meilleures pratiques en matière de mots-clés, de balises meta, de structure de site et bien plus encore.
          </p><p> <br></br>
            Le référencement web n&apos;est pas seulement une question de visibilité, c&apos;est aussi un investissement stratégique dans le marketing digital.
          </p>
        </div>
      </div>

    </HomeStyle >
  );
}

Home.propTypes = {
  basename: PropTypes.string
};

export default Home;