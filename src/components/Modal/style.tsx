import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
  from { top: -300px; opacity: 0 }
  to { top: 0; opacity: 1 }
`

export const SContainer = styled.div`
  display: flex}; 
  align-items: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: rgba(0,0,0,0.4); 
`

export const SContent = styled.div`
  position: relative;
  background-color: rgb(37, 37, 37);
  margin: auto;
  padding: 0;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  -webkit-animation-name: animatetop;
  -webkit-animation-duration: 0.4s;
  animation-name: animatetop;
  animation-duration: 0.4s
  animation: 0.3s ${fadeIn} ease-out;
  width: 100%;
  height: 100%;
  padding-top: 20px;
  
  @media (min-width: 768px) {
    height:30%;
    width: 40%;
  }
`

export const SClose = styled.i`
  color: white;
  float: right;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  right: 15px;
  top: 10px;
  cursor: pointer;
`

export const SHeader = styled.div`
  padding: 2px 16px;
  background-color: rgb(37, 37, 37);
  color: white;
`

export const SBody = styled.div`
  padding: 2px 16px; 
`

export const SFooter = styled.div`
  padding: 20px 16px;
  background-color: rgb(37, 37, 37);
  color: white;
`

export const SButton = styled.button`
  padding: 2px 16px;
  background-color: transparent;
  color: rgb(37, 184, 255);
  border: 0.5px solid rgb(37, 184, 255);
  padding: 10px;
  text-transform: uppercase;
  cursor: pointer;
`

export const SSelectContainer = styled.select`
  border: none;
  box-shadow: none;
  background: white;
  width: 100%;
  padding: 10px;
  border-radius: 2px;
  cursor: pointer;
`
