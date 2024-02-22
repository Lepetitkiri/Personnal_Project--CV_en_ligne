import colors from '../../Utils/Colors';
import styled from 'styled-components';
import FontType from '../../Utils/FontType';

const ContactStyle = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  h2 {
    ${FontType.h2};
  }

  p {
    ${FontType.p};
  }

  img {
    height: 50px;
    width: auto;
  }

  div {
    display: flex;
    align-items: center;
    padding: 20px;
    gap: 20px;
    border-radius: 20px;
    background: ${colors.white};

    @keyframes slideBottom {
      0% {
        transform: translateY(-10%);
      }
      25% {
        transform: translateY(0%);
      }
      50% {
        transform: translateY(10%);
      }
      75% {
        transform: translateY(0%);
      }
      100% {
        transform: translateY(-10%);
      }
    }

    .EmailLogo {
      animation: slideBottom 2s linear infinite both;
    }
  }

  .ContactPage__EmailPart, .ContactPage__SocialNetworkPart {
    a {
      padding: 10px;
    }
  }

  /* Version mobile */
  @media only screen and (max-width: 767px) {

    .ContactPage__EmailPart, .ContactPage__SocialNetworkPart {
      display: flex;
      flex-direction: column;
      text-align: center;
      a {
        padding: 10px;
      }
    }
  }

`;

export default ContactStyle;
