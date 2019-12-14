import styled from "styled-components";

export const SContainer = styled.div`
  height: 55px;
  padding: 10px;
  background-color: #0A0A0A;
  align-items: center;
  display: flex;
  padding: 5px 15px;
  justify-content: space-between;
`;

export const SLogo = styled.img`
  height: 45px;
  width: 45px;
`;

export const SLogoWrapper = styled.div`
  margin-right: 5px;
`;

export const STitle = styled.h1`
  color: #3171B5;
  font-size: 30px;
  font-weight: bold;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;

export const SInfoWrapper = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
`;

export const SInput = styled.input`
  padding: 12px 15px;
  border: none;
  background-color: transparent;
  outline: none;
  
  @media (max-width: 425px) {
    width: 100px;
  }
`;

export const SSearchWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 5px;
  margin-right: 20px;
  position: relative;
`;

export const SSearchContainer = styled.div`
  display: flex;
`;

export const SIconSearch = styled.i`
  color: #3478C1;
  font-size: 17px;
  padding-right: 10px;
  margin: auto;
`;

export const SIconMap = styled.i`
  color: #3478C1;
  font-size: 20px;
  padding-right: 10px;
`;

export const SIconMapWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const SLocationWrapper = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  user-select: none;
`;

export const SCityName = styled.p`
  font-size: 13px;
  font-weight: bold;
  display: none;
  
  @media (min-width: 768px) {
    display: block;
  }
`;
