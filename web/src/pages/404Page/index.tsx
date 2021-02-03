import React from 'react';
import { Main } from './styles';
import image from '../../assets/images/404.svg'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const UnfoundPage: React.FC  = () => {
    return <>
    <Main>
        <Helmet>
            <title>Ops me perdi legal</title>
        </Helmet>
        <img src={image} alt=""/>
        <h1 className="notFound">404</h1>
        <h2 className="notFound">Ops parece que você está um pouco perdido, tudo bem! {<Link to="/">Clique aqui</Link>} e vamos para a home</h2>
    </Main>
    </>
}

export default UnfoundPage