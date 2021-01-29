import styled from 'styled-components';

const Container = styled.div`
    width: 25rem;
    height: 15rem;
    border-radius: 1rem;
    box-shadow: 0.1rem 0.1rem 20px 0px #00000047;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 3rem 3fr 1fr;
    grid-template-areas: 
    'title title'
    'chart chart'
    'val val';
    margin-left:1rem;
    margin-top:1rem;
`
export const Title = styled.h3`
    grid-area:title;
    color:var(--grey);
    text-align:center;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;
    display:flex;
    align-items:center;
    justify-content:center;
`

export const Chart = styled.div`
    grid-area:chart;
    display:flex;
    align-items:center;
    justify-content:center;

`

export const Value = styled.div`
    grid-area:val;
    display:flex;
    align-items:center;
    justify-content:space-between;
    color:black;
    padding-left:1rem;
    padding-right:1rem;
    font-family: 'Ubuntu', sans-serif;
    font-weight: 700;

`

export default Container;