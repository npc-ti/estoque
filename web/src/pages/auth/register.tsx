import React, { useState } from 'react';
import { Main, ImageContainer, UserForm,LoginForm } from './styles';
import image from '../../assets/images/img-01.webp';
import { TextField, Button, Checkbox, FormControlLabel } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import api from '../../services/api';
import { login } from '../../services/auth';

const RegisterPage: React.FC = () => {
    const [err, setErr] = useState({
        email:false,
        password:false,
        password2:false,
        fristName:false,
        lastName:false,
        docNumber:false
    });    

    const [creds,setCreds] = useState({
        email:'',
        password:'',
        password2:'',
        fristName:'',
        lastName:'',
        docNumber:''
    }); 

    const [errText,setErrText] = useState('');

    const history = useHistory();

    async function handleSubmit (e: any) {
        e.preventDefault();
        setErr({
            email:false,
            password:false,
            password2:false,
            fristName:false,
            lastName:false,
            docNumber:false
        });
        setErrText('');

        if( !creds.email.length || !creds.password.length 
            || !creds.lastName.length || !creds.fristName.length || !creds.docNumber.length 
            || !creds.password2.length ){
                setErr({
                    email:creds.email.length?false:true,
                    password:creds.password.length?false:true,
                    password2:creds.password2.length?false:true,
                    docNumber:creds.docNumber.length?false:true,
                    lastName:creds.lastName.length?false:true,
                    fristName:creds.fristName.length?false:true,
                });
                return setErrText('Por favor preencha todos os campos');
            }
        if(creds.password != creds.password2) {
            setErr({
                ...err,
                password:true,
                password2:true,
            }); 
            return setErrText('As senhas são diferentes');
        }
        const response = await (await api.post('/auth/registeruser',creds)).data;

        if(response.err)
            return setErrText(response.err);

        login(response.jwt);
            history.push('/');
}

    return <> 
    <Main>
        <LoginForm>
        <Helmet>
            <title>Cadastro</title>
        </Helmet>
            <UserForm
            onSubmit={handleSubmit}
            >
            <span className="title">Cadastro</span>
            <div className="inputGroup">

            <TextField 
                error={err.fristName}
                onChange={(text) => 
                    setCreds({...creds, fristName:text.target.value})} 
                value={creds.fristName} 
                type="text" 
                className="input" 
                id="fristName" 
                label="Nome"/>

            <TextField 
                error={err.lastName}
                onChange={(text) => 
                    setCreds({...creds, lastName:text.target.value})} 
                value={creds.lastName} 
                type="text" 
                className="input" 
                id="lastName" 
                label="Sobrenome"/>
            </div>

            <TextField 
                error={err.email}
                onChange={(text) => 
                    setCreds({...creds, email: text.target.value})}                 
                value={creds.email} 
                type="email" 
                className="input" 
                id="email" 
                label="Email"/>

            <TextField 
                error={err.password}
                onChange={(text) => 
                    setCreds({...creds, password: text.target.value})}   
                value={creds.password} 
                type="password" 
                className="input" 
                id="password" 
                label="Senha"/>

            <TextField 
                error={err.password2}
                onChange={(text) => 
                    setCreds({...creds, password2: text.target.value})}   
                value={creds.password2} 
                type="password" 
                className="input" 
                id="password2" 
                label="Confirme sua senha"/>

            <TextField 
                error={err.docNumber}

                onChange={(text) => 
                    setCreds({...creds, docNumber: text.target.value})}   
                value={creds.docNumber} 
                type="text" 
                className="input" 
                id="doc" 
                label="Cpf/Cnpj"/>
            <p className="Error">{errText}</p>

            <div className="formFooter">

            <FormControlLabel
                className="checkBoxGroup"
                control={<Checkbox color="primary" name="checkedA" />}
                label="Lemre-se de mim"
                />
            </div>
            <Button
                type="submit"
                onClick={handleSubmit}
                id="login" 
                className="btn"
                >Cadastro</Button>
                
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