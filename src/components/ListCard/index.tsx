import React from 'react';

import Card from './components/Card';

import { IMovieModel, ISelectedType, IShowTimes } from '../../shared/interface';

import { SListCardContainer } from './styled';

interface IProps {
  data: IMovieModel[]
  seachValue: string
  selectedTypes: ISelectedType[]
}

const ListCard = (props: IProps) => {
  const getTypes = (showtimes: IShowTimes[]) => {
    const types = [];
    showtimes.map((showtime) =>
      showtime.rooms.map((room) =>
        room.sessions.map((session) =>
          session.types.map((type) => {
            !(types.some(item => item.name === type.name)) &&
              types.push({ name: type.name, alias: type.alias })
          })
        )
      )
    )
    return types
  }

  const hasValidSearchValue = (item: IMovieModel) =>
    item.event.title.toLowerCase().includes(props.seachValue.toLowerCase())

  const hasValidTypes = (item: IMovieModel) =>
    props.selectedTypes.every(selectedType =>
      (getTypes(item.showtimes)).some((type) =>
        type.name === selectedType.name))

  const movies = props.data.filter((item) =>
    hasValidSearchValue(item) && hasValidTypes(item)
  )

  return (
    <SListCardContainer>
      {
        movies.length ? movies.map((movie, key) =>
          <Card
            key={key}
            movie={{
              title: movie.event.title,
              img: movie.event.images[0].url,
              completeTags: movie.event.completeTags,
              trailer: movie.event.trailers[0].url, 
              siteURL: movie.event.siteURL
            }}
          />
        ) : <h3>Filme Não Encontrado</h3>
      }
    </SListCardContainer>
  )
}

export default ListCard;
