import styled from 'styled-components';

export const SCardContainer = styled.a`
  margin: 10px 25px 30px 0;
  cursor: pointer;
  text-decoration: none;
  color: white;
`;

export const SCardContent = styled.div`
  width: 240px;
  height: 365px;
  background-image: url('${(props: { img: string }) => props.img}');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  position: relative;
  background-position: center center;
  transition: background-size 0.3s ease-in;
  &:hover {
    background-size: 120% 120%;
  }
`;

export const SFilmTitle = styled.p`
  margin: 20px 0 10px;
  width: 90%;
`;

export const STagsContainer = styled.div`
  position: absolute;
  bottom: 15px;
  left: 15px;
`;

export const STagDescription = styled.div`
  background: lightslategrey;
  ${(props: { bgColor: string, color: string }) =>`
  background-color: ${props.bgColor ? props.bgColor : 'lightslategrey'};
  color: ${props.color ? props.color : 'white'};
  `}
  padding: 8px;
  margin-bottom: 10px;
  display: inline-block;
  
  &:last-child {
    margin-bottom: 0;
  }
`;
