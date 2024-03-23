//import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';

const ContactStyle = styled.div`

@keyframes rotateHand {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(10deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-10deg); }
  100% { transform: rotate(0deg); }
}

  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 50px;
  padding: 5%;
  line-height: 25px;

  & img {
    width: 50%;
    object-fit: cover;
  }
  .HomePage-Card {
    h2 {
      ${FontType.h2};
    }
    h3 {
      ${FontType.h3};
    }
    p {
      ${FontType.p};
    }
    strong, em {
      ${FontType.strong};
    }
  }


  & .HomePage-Presentation {
    display: flex;
    & img {
      width: 40%;
    }
  }
  & .HomePage-Presentation__Texte {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding-right: 2%;
    & .HomePage-Presentation__Hand {
      width: 15%;
      animation: rotateHand 1500ms linear 3;
      transform-origin: right bottom;
    }
    & :nth-child(-n+4):not(strong):not(em) {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1%;
    }
    h2 strong {
      ${FontType.h2};
    }
    h3 {
      padding-bottom: 50px;
    }
  }

  & .HomePage-Competences {
    padding: 1%;
  }
  & .HomePage-Competences__Titre {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px 20px 0;
  }
  & .HomePage-Competences__Tags {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10%;
    padding-bottom: 1%;
    ul {
      display: flex;
      flex-direction: column;
      width: 20%;
      gap: 10px;
      padding: 0;
      li {
        border-radius: 25px;
        padding: 2%;
        width: auto;
        text-align: center;
        background: rgba(153,153,153,.3);
      }
    }
    p {
      width: 70%;
    }
  }



  /* Version tablette */
  @media only screen and (max-width: 992px) {
    & .HomePage-Presentation img {
        width: 30%;
    }
    & .HomePage-Presentation__Texte h3 {
        padding: 10px;
    }
  }


  /* Version mobile */
  @media only screen and (max-width: 767px) {
    & .HomePage-Presentation img {
      display: none;
    }
    & .HomePage-Competences__Tags {
      padding-bottom: 5%;
      ul {
        width: 40%;
      }
      p {
        width: 50%;
      }
    }
  }

  /* Tres petits ecrans */
  @media only screen and (max-width: 430px) {
    & .HomePage-Presentation__Texte :nth-child(-n+4):not(strong):not(em) {
      display: block;
    }
    & .HomePage-Presentation__Texte :nth-child(3):not(strong):not(em) {
      display: flex;
    }
  }
`;

export default ContactStyle;
