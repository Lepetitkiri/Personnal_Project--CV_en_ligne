import styled from 'styled-components';
import colors from '../../Utils/Colors';
import FontType from '../../Utils/FontType';

export const SwitchContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  background-color: ${colors.backgroundLight || '#f9f9f9'}; 
  border: 2.2px solid ${colors.secondary};
  border-radius: 50px;
  padding: 6px;
  width: 300px;
  cursor: pointer;

  @media (max-width: 480px) {
    width: 85%; 
    max-width: 280px;
    margin: 20px auto;
    }
`;

export const SlidingPill = styled.div`
  position: absolute;
  top: 4px;
  bottom: 4px;
  left: 4px;
  width: calc(50% - 4px);
  background-color: ${colors.quaternary};
  border-radius: 40px;
  z-index: 1;
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  /* Déplacement de la pillule selon la prop */
  transform: ${props => props.active === 'Dev' ? 'translateX(100%)' : 'translateX(0%)'};
`;

export const SwitchButton = styled.button`
   ${FontType.p};
  flex: 1;
  z-index: 2;
  padding: 12px 0;
  border: none;
  background-color: transparent;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  transition: all 0.4s ease;
  color: ${props => props.isActive ? '#ffffff' : colors.quaternary};

  &:hover {
    color: ${colors.black};
    font-weight: bold;
    text-shadow: 0px 0px 1px rgba(0,0,0,0.2);
  }

  /* Media Query pour Mobile */
  @media (max-width: 480px) {
    font-size: 0.8rem; 
    padding: 10px 0;  
  }
`;