import border from '../../Utils/Border';
import styled from 'styled-components';
import colors from '../../Utils/Colors';

const CVCardStyle = styled.a`

  display: flex;
  ${border};
  border: 1px solid grey;
  height: auto;
  background: ${colors.white};

  img {
    height: 50px;
    width: auto;
  }

  .CVCard__datePart, .CVCard__ExperiencePart {
    display: flex;
    flex-direction: column;
    padding: 10px;
    width: 100%;
  }

  .CVCard__datePart {
    row-gap: 10px;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 20%;
    ${border};
  }

  .CVCard__ExperiencePart :nth-child(n) {
    padding: 5px;
  }

  .CVCard__ExperiencePart :nth-child(1) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-height: 50px;
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    .CVCard__datePart {
      display: none;
    }
    }
  }
`;

export default CVCardStyle;
