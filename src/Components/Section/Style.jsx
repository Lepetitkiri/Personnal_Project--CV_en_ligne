import colors from '../../Utils/Colors';
import border from '../../Utils/Border';
import styled from 'styled-components';

const SectionStyle = styled.section`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  padding: 30px;
  ${border};
  background-color: ${colors.grey};
`;

export default SectionStyle;
