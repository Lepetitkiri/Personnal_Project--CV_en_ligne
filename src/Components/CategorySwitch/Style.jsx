import styled from 'styled-components';
import colors from '../../Utils/Colors';
import FontType from '../../Utils/FontType';

export const SwitchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
  background-color: ${colors.backgroundLight || '#f9f9f9'}; 
  border: 2px solid ${colors.secondary};
  border-radius: 50px;
  padding: 6px;
  width: fit-content;
  cursor: pointer;
`;

export const SwitchButton = styled.button`
  padding: 12px 35px;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-weight: 500;
  font-size: 0.9rem;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  background-color: transparent;
  color: ${colors.tertiary};
  letter-spacing: 1.5px;
   ${FontType.p};

  &:hover {
    color: ${colors.black};
    font-weight: bold;
    text-shadow: 0px 0px 1px rgba(0,0,0,0.2);
  }

  &.active {
    background-color: ${colors.quaternary};
    color: #ffffff;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }
`;