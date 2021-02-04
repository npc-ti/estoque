import React, {useState} from 'react';
import { Main, LoginForm, ImageContainer, UserForm } from './styles';
import image from '../../assets/images/img-01.webp';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import { login } from '../../services/auth';

const LoginPage: React.FC = () => {

    const [err, setErr] = useState({
        email:false,
        password:false,
    });    

    const [creds,setCreds] = useState({
        email:'',
        password:'',
    }); 

    const [errText, setErrText ] = useState('');
    const history = useHistory();

    async function handleSubmit(e: any) 
    {
        e.preventDefault();
        setErr({
            email:false,
            password:false,
        });
        setErrText('');

        if( !creds.email.length || !creds.password.length ){
            setErr({
                email:creds.email.length?false:true,
                password:creds.password.length?false:true,
            });

            return setErrText('Por favor preencha todos os campos');
        }

        if(creds.password.length < 7){
            setErr({
                ...err,
                password:true,
            });
            return setErrText('A senha deve ter ao menos 8 caracteries');
            
        }
        const response = await (await api.post('/auth/loginUser',creds)).data;
        if(response.err)
            return setErrText(response.err);
        
        login(response.jwt);
        history.push('/');
        
    }

    return <> 
    <Main>
        <Helmet>
            <title>Login</title>
        </Helmet>
        <LoginForm onSubmit={handleSubmit}>

            <ImageContainer>
                <img src={image} alt=""/>
            </ImageContainer>
            
            <UserForm>
            <span className="title">Login</span>

            <TextField 
                value={creds.email} 
                onChange={text=> 
                    setCreds({...creds, email:text.target.value})} 
                error={err.email} 
                className="input" 
                id="email" 
                label="Email"/>

            <TextField 
                error={err.password} 
                value={creds.password} 
                onChange={text=> 
                    setCreds({...creds, password:text.target.value})} 
                type="password" 
                className="input" 
                id="password" 
                label="Senha"/>

            <p className="Error">{errText}</p>
            <div className="formFooter">
            <FormControlLabel
                className="checkBoxGroup"
                control={<Checkbox color="primary" name="checkedA" />}
                label="Lemre-se de mim"
                />
            </div>
                <Link to="/remember">Esqueci a senha</Link>

            <Button 
                type="submit"
                onClick={handleSubmit} 
                id="login" 
                className="btn">Login</Button>
                
            <Link to="/register">
            <Button id="register" className="btn">Cadastro</Button>
            </Link>

            </UserForm>

             </LoginForm>
    </Main>
    
    </>
}

export default LoginPage