import React from 'react';
import { CardWithChartInterface } from './CardsWithChartInterface';
import Container,{ Chart, Title, Value } from './styles';

const CardsWithChart: React.FC<CardWithChartInterface> = ({CardWithChartProps}) => {
    return (<Container>
        <Title>{CardWithChartProps?.title}</Title>
        <Chart>
            {CardWithChartProps?.center}
        </Chart>
        <Value>
            {
                CardWithChartProps?.footer?.left && <span>{CardWithChartProps?.footer?.left}</span>
            }
            {
                CardWithChartProps?.footer?.right && <span>{CardWithChartProps?.footer?.right}</span>
            }
        </Value>
    </Container>)
}

export default CardsWithChart