import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Loading from '../Loading';
import Header from '../Header';
import ListCard from '../ListCard';
import ListType from '../ListType';

import { SContent, SInfo, SInfoWrapper } from './styled';

import { IMovieModel, ISelectedType, IType, ICity } from '../../shared/interface';

const serveice = 'https://api-content.ingresso.com/v0/templates/highlights';

export const Home = () => {
  const [currentCity, setCurrentCity] = useState<ICity>({ id: '1', label: 'Rio de Janeiro' });
  let [data, setData] = useState<IMovieModel[] | null>(null);
  let [seachValue, setSeachValue] = useState<string | null>('');
  let [selectedTypes, setSelectedTypes] = useState<ISelectedType[] | null>([])
  let [availableTypes, setAvailableTypes] = useState<IType[] | null>([]);

  useEffect(() => {
    clearContent();
    getAll();
  }, [currentCity]);

  const getAll = () =>
    axios
      .get(`${serveice}/${currentCity.id}/partnership/home`)
      .then((response) => {
        getData(response.data)
        getAvailableTypes(response.data)
      })

  const clearContent = () => {
    data = null
    setData(data);
    seachValue = ''
    setSeachValue(seachValue)
    availableTypes = selectedTypes = [];
    setAvailableTypes([...availableTypes]);
    setSelectedTypes([...selectedTypes]);
  }

  const getData = (data: IMovieModel[]) => setData(data)

  const getAvailableTypes = (data: IMovieModel[]) =>
    data.map((item) =>
      item.showtimes.map((showtime) =>
        showtime.rooms.map((room) =>
          room.sessions.map((session) =>
            session.types.map((type) => {
              !(availableTypes.some(item => item.name === type.name)) &&
                availableTypes.push({ name: type.name, alias: type.alias })
              setAvailableTypes([
                ...availableTypes
              ])
            })
          )
        )
      )
    )

  return data && availableTypes ?
    <>
      <Header
        onSearchValueChange={(value) => setSeachValue(value)}
        onSetCurrentCity={setCurrentCity}
        currentCity={currentCity}
      />
      <SContent>
        <h3>Filmes</h3>
        <ListType
          availableTypes={availableTypes}
          onSetSelectedTypes={setSelectedTypes}
        />
        <SInfoWrapper>
          <SInfo>Em Cartaz</SInfo>
        </SInfoWrapper>
        <ListCard
          data={data}
          selectedTypes={selectedTypes}
          seachValue={seachValue}
        />
      </SContent>
    </>
    :
    <Loading />
};
