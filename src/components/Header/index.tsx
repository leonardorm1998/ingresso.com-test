import React, { useState, SetStateAction, Dispatch } from "react";

import Modal from "../Modal";

import { ICity } from "../../shared/interface";

import { 
    SContainer, SLogo, SLogoWrapper, STitle, SInfoWrapper, 
    SSearchContainer, SInput, SIconSearch, SIconMap, SSearchWrapper, 
    SIconMapWrapper, SLocationWrapper, SCityName 
} from "./styled";

import icon from './images/ingresso-logo.png'

interface IProps {
    onSearchValueChange: (value: string) => void
    onSetCurrentCity: Dispatch<SetStateAction<ICity>>
    currentCity: ICity
}

const Header = (props: IProps) => {
    const [isOpen, toggleModal] = useState(false)
    return (
        <>
            <SContainer>
                <SInfoWrapper href='https://www.ingresso.com/rio-de-janeiro/home/'>
                    <SLogoWrapper>
                        <SLogo src={icon} />
                    </SLogoWrapper>
                    <STitle>Ingresso.com</STitle>
                </SInfoWrapper>
                <SSearchContainer>
                    <SSearchWrapper>
                        <SInput
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => props.onSearchValueChange(event.target.value)}
                            type="text"
                            placeholder='Pesquise por Filmes'
                        />
                        <SIconSearch className="fa fa-search" />
                    </SSearchWrapper>
                    <SLocationWrapper onClick={() => {
                        toggleModal(!isOpen)
                    }}>
                        <SIconMapWrapper>
                            <SIconMap className="fas fa-map-marker-alt" />
                        </SIconMapWrapper>
                        <SCityName>{props.currentCity.label}</SCityName>
                    </SLocationWrapper>
                </SSearchContainer>
            </SContainer>
            <Modal
                isOpen={isOpen}
                toggleModal={() => toggleModal(!isOpen)}
                onSetCurrentCity={props.onSetCurrentCity}
                currentCity={props.currentCity}
            />
        </>
    );
};

export default Header;
