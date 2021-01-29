import React from 'react';
import CardsWIthBorder from '../../components/CardsBorder';
import CardsWithChart from '../../components/CardsWithChart';
import Main,{ListCards} from './styles'

const HomePage: React.FC = () => {
    return (<Main>

        <ListCards>
            <CardsWIthBorder 
                styles={{
                    background:"#fff",
                    color:"red",
                }}
                title={'Lucro Liquido'} ></CardsWIthBorder>
            
        </ListCards>

    </Main>)
}

export default HomePage