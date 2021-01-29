import styled from 'styled-components';

const main = styled.main`

    width: calc(100vw - 14rem);
    margin-left:14rem;
    height: 100vh;
    display:flex;
    flex-direction:column;
    overflow-y:auto;
    overflow-x:hidden;
    padding:1rem;

    @media(max-width:700px) {
        width: calc(100vw - 4rem);
        margin-left:4rem;

    }
`;

export const ListCards = styled.div`

    width:100%;
    height:auto;
    display:flex;
    flex-wrap:wrap;
    align-items:center;
    justify-content:center;
`;


export default main;