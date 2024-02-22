import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';

const FooterStyle = styled.footer`

  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;
  background: -webkit-linear-gradient(360deg, ${colors.quaternary}, ${colors.tertiary}, ${colors.primary});
  margin: 0px;
  padding: 0px;
  ${FontType.p};
  color: ${colors.white};

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {
  }
`;

export default FooterStyle;
