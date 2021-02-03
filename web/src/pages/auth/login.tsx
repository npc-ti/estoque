import React from 'react';
import { Main, LoginForm, ImageContainer, UserForm } from './styles';
import image from '../../assets/images/img-01.webp';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const LoginPage: React.FC = () => {
    
    return <> 
    <Main>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm>

            <ImageContainer>
                <img src={image} alt=""/>
            </ImageContainer>
            
            <UserForm>
            <span className="title">Login</span>
            <TextField className="input" id="email" label="Email"/>
            <TextField type="password" className="input" id="password" label="Senha"/>
            <div className="formFooter">
            <FormControlLabel
                className="checkBoxGroup"
                control={<Checkbox color="primary" name="checkedA" />}
                label="Lemre-se de mim"
                />
                <Link to="/remember">Esqueci a senha</Link>
            </div>
            <Button id="login" className="btn">Login</Button>
            <Link to="/register">
            <Button id="register" className="btn">Cadastro</Button>
            </Link>

            </UserForm>

             </LoginForm>
    </Main>
    
    </>
}

export default LoginPage