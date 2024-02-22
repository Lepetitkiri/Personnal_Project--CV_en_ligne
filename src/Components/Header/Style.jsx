import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';

const HeaderStyle = styled.header`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
  height: auto;
  width: auto;
  background: -webkit-linear-gradient(360deg, ${colors.quaternary}, ${colors.tertiary}, ${colors.primary});
  padding: 50px 50px 0 50px;
  gap: 20px;

  img {
    height: 50%;
    width: 50%;
  }

  h1 {
    text-align: center;
    ${FontType.h1};
    line-height: 50px;
    padding: 0px 30px;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    a {
      display: flex;
      flex-direction: column;
    }

    .Navigation__icon {
      display: flex;
      align-items: center;
      justify-content: center;
    }

  .Navigation__icon {
    flex-direction: column;
    height: 120px;
    width: 120px;
    border-radius: 50%;
    background-color: ${colors.white};
    border: 3px solid ${colors.grey};
    ${FontType.strong};
    transition: border 1s;  
    transition: opacity 1s;
  }

  .Navigation__icon:hover {
    border: 3px solid ${colors.black};
    transition: border 300ms;
    transition: opacity 300ms;
    opacity: 0.7;
  }

  .Section__trianglePart {
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 30px;
  }

  .Section__triangle {
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 30px solid ${colors.grey};
  }
  }

  /* Version tablette */
  @media only screen and (max-width: 992px) {
  
    height: auto;
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    nav .Navigation__icon {
      width: 80px;
      height: 80px;
      font-size: 15px;
    }
  }

  /* Version mobile - très petits ecrans*/
  @media only screen and (max-width: 400px) {

    width: 100%;
    padding-right: 0px;
    padding-left: 0px;

    nav .Navigation__icon img {
        display: none;
    }

    nav .Navigation__icon {
      background: transparent;
      border: 0px;
      width: auto;
    }

    .Section__triangle {
      display: none;
    }
  }
`;

export default HeaderStyle;
