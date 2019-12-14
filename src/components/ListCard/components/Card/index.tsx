import * as React from 'react';

import {
  SCardContainer,
  SCardContent,
  STagDescription,
  SFilmTitle,
  STagsContainer
} from './styled';

interface IProps {
  movie: {
    img: string
    completeTags: { name: string, background: string, color: string }[]
    title: string
    trailer: string
    siteURL: string
  }
}

const Card = (props: IProps) => (
  <SCardContainer href={props.movie.trailer || props.movie.siteURL}>
    <SCardContent img={props.movie.img}>
      <STagsContainer>
        {props.movie.completeTags.map((item, id) => (
          <STagDescription
            key={id}
            bgColor={item.background}
            color={item.color}
          >
            {item.name}
          </STagDescription>
        ))}
      </STagsContainer>
    </SCardContent>
    <SFilmTitle>{props.movie.title}</SFilmTitle>
  </SCardContainer>
);

export default Card;
