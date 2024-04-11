import border from '../../Utils/Border';
import styled from 'styled-components';
import colors from '../../Utils/Colors';
import FontType from '../../Utils/FontType';

const ProjectCardStyle = styled.a`

  display: flex;
  flex-direction: column;
  min-height: 300px;
  width: 26%;
  ${border};
  border: 3px solid ${colors.quinary};
  padding: 10px;
  ${FontType.p};
  background: ${colors.white};

  :nth-child(n) {
    padding: 5px;
  }

  .ProjectPage__galleryCardTitre {
    display: flex;
    align-items: center;
    width: auto;
    h3 {
      width: 60%;
      ${FontType.h3};
    }
    p {
      width: 20%;
    }
    display: flex;
    justify-content: space-between;
  }

  .ProjectPage__galleryCardDescription {
  }

  .ProjectPage__galleryCardLogo {
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {

      width: 40%;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    width: 100%;
    }
  }
`;

export default ProjectCardStyle;
