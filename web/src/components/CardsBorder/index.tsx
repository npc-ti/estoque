import React from 'react';
import CardsWithChart from '../CardsWithChart';
import { CardsWithBorderInterface } from './CardsWithBorderInterfaces';
import Container, { Header, Body } from './styles';

const CardsWIthBorder: React.FC<CardsWithBorderInterface> = 
    ({styles, children, title}) => {
    return (
        <Container style={{...styles}}>
            <Header>
                <h4 className="title">{title}</h4>
            </Header>
            <Body>
                {children}
            </Body>
        </Container>
    )
}

export default CardsWIthBorder