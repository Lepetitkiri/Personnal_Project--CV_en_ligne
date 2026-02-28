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
  background: transparent;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    width: 500px;
    height: 1000px;
    background: linear-gradient(225deg, ${colors.grey} 0%, ${colors.grey} 60%, ${colors.quinary} 70%, ${colors.secondary} 80%, ${colors.primary} 100%);
    position: absolute;
    top: -50px;
    left: -50px;
    transition: all 0.3s;
  }

  &:hover::after {
    transform: translatey(-500px);
  }

  :nth-child(n) {
    padding: 5px;
    z-index: +1;
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
  padding-top: 10px;
  padding-bottom: 20px;
  }

  .ProjectPage__galleryCardLogo {
  }

  .ProjectPage__galleryCardDescription p:nth-of-type(2) {
    font-style: italic;
    ${FontType.smallItalic};
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
