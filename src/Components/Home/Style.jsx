//import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';
import colors from '../../Utils/Colors';

const ContactStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 50px;
  width: 100%;

  h2, h3 {
    ${FontType.h2};
    padding-bottom: 40px;
  }

  .HomePage__Card {
    padding: 20px;
    border-radius: 25px;
    height: auto;
    width: 100%;
    line-height: 25px;
    text-align: justify;
  }

  .HomePage__Presentation {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    
    img {
      width: 40%;
    }
  }

  .HomePage__PresentationTexte {
    display: flex;
    flex-direction: column;
    align-items: center;

    div:nth-child(1) {
      display: flex;
      justify-content: center;
      padding-bottom: 30px;
      width: 50%;
    }
  }

  .HomePage__CompetencesTitre {
    display: flex;
    justify-content: space-between;
    gap: 20px;
  }

  .HomePage__CompetencesTags ul {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding-left: 0px;
    padding-right: 0px;
    gap: 2%;
    row-gap: 5px;
  }

  .HomePage__CompetencesTags li {
    padding: 1rem 1.5rem;
    color: #666;
    background: rgba(153,153,153,.2); 
    font-size: 1.3rem;     
    font-weight: 400;
    transition: color 300ms ease;
    &:hover {
      color: ${colors.black};
      transition: color 300ms ease;
      }
      strong {
        font-weight: normal;
      }
    }

    .HomePage__Article h3 {
      padding-bottom: 0px;
      padding-top: 20px;
    }
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    .HomePage__PresentationTexte div :nth-child(1) {
      display: flex;
      padding-bottom: 10px;
      width: 40%;
    }

    .HomePage__Presentation img {
        display: none;
      }
    }
  }
`;

export default ContactStyle;
