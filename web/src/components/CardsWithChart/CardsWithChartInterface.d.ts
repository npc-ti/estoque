import { FC } from 'react';

export interface footerProps {
    left: string | any,
    right: string | any
}

export interface CardWithChartProps {
    title?: string;
    center?: FC | any;
    footer?: footerProps;
}

export interface CardWithChartInterface {
    CardWithChartProps?: CardWithChartProps;
}