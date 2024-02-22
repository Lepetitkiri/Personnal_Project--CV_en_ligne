//import colors from '../../Utils/Colors';
import FontType from '../../Utils/FontType';
import styled from 'styled-components';

const ErrorStyle = styled.article`

  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  padding-top: 50px;
  padding-bottom: 50px;
  min-height: 500px;

  img {
    width: 20%;
  }

  h2 {
    display: flex;
    align-items: center;
    text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    ${FontType.h2};
  }

  .MiniGame {
    width: 100%;
    height: 100px;
    overflow: hidden;
    border-bottom: 3px solid black;
  }

  .MiniGame__road1, .MiniGame__road2 {
    position: relative;
    width: 100%;
    height: 50%;
  }

  @keyframes slideRight {
    0% {
      right: 0%;
    }
    100% {
      right: 100%;
    }
  }

  .Obstacle, .Alien {
    height: 50px;
    width: auto;
  }

  .Obstacle--1 {
    position: absolute;
    animation: slideRight 5s linear 0s infinite both;
  }
  .Obstacle--2 {
    position: absolute;
    animation: slideRight 5s linear 1s infinite both;
  }
  .Obstacle--3 {
    position: absolute;
    animation: slideRight 5s linear 1600ms infinite both;
  }
  .Obstacle--4 {
    position: absolute;
    animation: slideRight 5s linear 3500ms infinite both;
  }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    .Obstacle--3 {
      visibility: hidden;
    }
  }
`;

export default ErrorStyle;
