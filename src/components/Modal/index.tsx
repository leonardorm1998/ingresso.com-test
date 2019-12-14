import React, { useState, SetStateAction, Dispatch } from "react";

import { ICity } from "../../shared/interface";

import { SContainer, SContent, SHeader, SClose, SBody, SFooter, SButton, SSelectContainer } from './style';

interface IProps {
  isOpen: boolean
  toggleModal: () => void
  onSetCurrentCity: Dispatch<SetStateAction<ICity>>
  currentCity: ICity
}

const Modal = (props: IProps) => {
  const [selectedCity, setCity] = useState<ICity>(props.currentCity)
  const getAvailableCities = [
    { id: '1', label: 'Rio de Janeiro' },
    { id: '2', label: 'São Paulo' }
  ]

  return props.isOpen && (
    <SContainer>
      <SContent>
        <SHeader>
          <SClose className="fa fa-close" onClick={() => props.toggleModal()} />
          <h2>Você está em: {props.currentCity.label}</h2>
        </SHeader>
        <SBody>
          <SSelectContainer
            onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
              const city = getAvailableCities.find((city) => city.id === event.target.value)
              setCity(city)
            }}
            defaultValue={props.currentCity.id}
          >
            {getAvailableCities.map((city, key) =>
              <option
                key={key}
                value={city.id}
              >
                {city.label}
              </option>
            )}
          </SSelectContainer>
        </SBody>
        <SFooter>
          <SButton onClick={() => {
            props.onSetCurrentCity(selectedCity)
            props.toggleModal()
          }}>
            Trocar Cidade
          </SButton>
        </SFooter>
      </SContent>
    </SContainer>
  );
}

export default Modal;