import React from 'react';
import { Main, ImageContainer, UserForm,LoginForm } from './styles';
import image from '../../assets/images/img-01.webp';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const RegisterPage: React.FC = () => {
    return <> 
    <Main>
        <LoginForm>
        <Helmet>
            <title>Cadastro</title>
        </Helmet>
            <UserForm>
            <span className="title">Cadastro</span>
            <div className="inputGroup">
            <TextField type="text" className="input" id="fristName" label="Nome"/>
            <TextField type="text" className="input" id="lastName" label="Sobrenome"/>
            </div>
            <TextField type="email" className="input" id="email" label="Email"/>
            <TextField type="text" className="input" id="password2" label="Confirme sua senha"/>
            <TextField type="password" className="input" id="password" label="Senha"/>
            <TextField type="text" className="input" id="doc" label="Cpf/Cnpj"/>
            <div className="formFooter">

            <FormControlLabel
                className="checkBoxGroup"
                control={<Checkbox color="primary" name="checkedA" />}
                label="Lemre-se de mim"
                />
            </div>
            <Button id="login" className="btn">Cadastro</Button>
            <Link to="/login">
            <Button id="register" className="btn">Já tenho conta</Button>
            </Link>

            </UserForm>
            <ImageContainer>
                <img src={image} alt=""/>
            </ImageContainer>
        </LoginForm>
    </Main>
    
    </>
}

export default RegisterPage;