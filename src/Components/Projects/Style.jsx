//import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';

const ProjectStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h2 {
    ${FontType.h2};
  }

  img {
    height: 50px;
    width: auto;
  }

  .ProjectPage__titre {
    display: flex;
    align-items: center;
    gap: 20px;
    padding-bottom: 50px;
  }

  .ProjectPage__gallery {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    height: auto;
    row-gap: 100px;
    width: 100%;
    }
  }
`;

export default ProjectStyle;
