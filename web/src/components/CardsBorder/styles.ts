import styled from 'styled-components';

const Container = styled.div`

    width:100%;
    height: 6rem;
    max-width: 20rem;
    min-width: 10rem;
    background: #313131;
    border-right: 10px solid red;
    border-radius: 0.8rem;
    /* box-shadow: 0.2rem 0.2rem 4px 0px #000000c9; */

    display:grid;
    grid-template-rows: 2rem 1fr;
    grid-template-areas:
    "header"
    "body";
    color: white;
    padding-left:1rem;
    padding-right:1rem;
    margin-top: 1rem;
    margin-left:1rem;
`;

export const Header = styled.div`
    grid-area: header;
    display:flex;
    align-items:center;
    justify-content:flex-start;
    .title{
    font-family: 'Varela Round', sans-serif;
    font-weight: 700;
    }

`;

export const Body = styled.div`
    grid-area: body; 
        
    display:flex;
    align-items:center;
    justify-content:flex-start;
`;

export default Container;