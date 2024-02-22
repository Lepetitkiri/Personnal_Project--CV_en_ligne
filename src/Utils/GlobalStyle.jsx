import styled from 'styled-components';
import colors from './Colors';
import FontType from './FontType';

const GlobalStyle = styled.div`

    main {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      align-content: center;
      justify-content: flex-start;
      align-items: center;
      height: auto;
      min-height: 500px;
      width: 100%;
      color: ${colors.black};
      background: -webkit-linear-gradient(360deg, ${colors.quaternary}, ${colors.tertiary}, ${colors.primary});
      object-fit: cover;
      ${FontType.p};
      margin: 0;
      padding: 0;
    }

    h1, h2, h3, p, div {
      margin: 0;
    }

    * {
    font-family: Montserrat, 'Courier New', Courier, sans-serif;
    list-style: none;
    }

  a {
    text-decoration: none;
    color: ${colors.black};
  }

  ::placeholder {
    color: ${colors.white};
  }

  /* Version tablette */
    @media only screen and (max-width : 992px) {
      max-width: 992px;
    }

    /* Version mobile */
    @media only screen and (max-width : 767px) {
      max-width: 767px;
    }

`;

export default GlobalStyle;
