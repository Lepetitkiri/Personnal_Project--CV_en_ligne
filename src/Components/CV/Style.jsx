//import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';

const CVStyle = styled.div`

  display: flex;
  align-items: center;

  .CVPage__PortraitPart {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;
    height: 500px;
    justify-content: space-around;
    ${FontType.h2};

    img {
      height: 200px;
      width: 200px;
      object-fit: cover;
      border-radius: 50%;
    }
  }

  .CVPage__ExperiencePart {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    gap: 20px;
    padding: 20px;

    .CVPage__ExperiencePart--Titre {
      display: flex;
      align-items: center;
      gap: 20px;
      ${FontType.h3};
      
      img {
        height: 50px;
        width: 50px;
      }
    }
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
    
    .CVPage__PortraitPart {
      display: none;
    }
  }
`;

export default CVStyle;
