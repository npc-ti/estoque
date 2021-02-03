import styled from 'styled-components';

export const Main = styled.main`

    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
    background: #fff;
    width:100vw;
    height:100vh;
    padding:1rem;
    overflow-y: auto;
    color:var(--primary);

    img{ 
        width:100%;
        height:100%;
        max-width: 40rem;
        max-height: 40rem;
    }
    
    h1{
        font-size: 10rem;
        font-weight: 700;
    }
    h2{ 
        font-size: 2rem;
    }

`
