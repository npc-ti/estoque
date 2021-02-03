import styled from 'styled-components';

export const Main = styled.main `
    background: var(--primary);
    background: linear-gradient(-135deg,var(--primary),#0f2462);
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-wrap:wrap;
`

export const LoginForm = styled.div`
    width: 60rem;
    padding: 177px 130px 80px 95px;
    background:#fff;
    display: flex;
    flex-wrap: wrap;
    align-items:center;
    justify-content: space-between;
    border-radius: 10px;
    box-shadow: -4px 3px 24px -7px rgba(0,0,0,0.75);
    @media(max-width:992px){
        width:90%;
        padding: 177px 90px 80px 85px;
    }
    @media(max-width:768px){
        width:90%;
        padding: 100px 80px 33px;
    }
`

export const ImageContainer = styled.div`
    width:316px;
    img{ 
        max-width: 100%;
    }
    @media(max-width:992px){
        width:32%;
    }
    @media(max-width:768px){
        display:none;
    }
`

export const UserForm = styled.form`
    width: 290px;
    height:auto;
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction:column;

    .inputGroup {
    display: flex;
    align-items: center;
    justify-content:space-between;
    width:100%;
    .input{
        width:48% !important;
    }
    }
    .input{
        width:100%;
    }
    .btn {
        height:2.5rem;
        width:10rem;
        margin-top:.5rem;
        span {
            font-weight: 500;
        }
    }
    #login.btn{
        margin-top:2rem;
        background-color:var(--sucess);
    }

    .formFooter{
        display:flex;
        align-items: center;
        justify-content: space-between;
    }
    .checkBoxGroup{
        color:#000;
    }
    @media (max-width: 992px){
        width:50%;
    }
    @media (max-width: 768px){
    width: 100%;
    }

    span.title {
        font-family:'Ubuntu';
        font-weight:700;
        font-size: 24px;
        color: #333;
        line-height: 1.2;
        text-align: center;
        width: 100%;
        display: block;
        padding-bottom: 54px;
    }
`