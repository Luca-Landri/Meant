import { useState } from 'react';
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux'
import { signInGoogle, NormalSingIn } from '../app/Data';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import task from '../../assets/task-check.png'
import social from '../../assets/social.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh; 

    @media (max-width: 768px) {}
`

const LoginTitle = styled.h1`
    color: black;
    margin-left: 50px;
    font-weight: bold;
    margin-right: 0;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    margin-top: 5%;

    @media (max-width: 768px) {
        flex-direction: column;
        font-size: 2rem;
        margin-bottom: 50%;
        margin-top: 0;
        margin-left: 30px;
    }

`

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: auto;
    margin-left: auto;
    gap: 20px;
    margin-bottom: 15%;

    @media (max-width: 768px) {

    }
`

const LoginForm = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 40%;
    border: 1px solid hsla(0, 0%, 65%, 0.158);
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    z-index: 99;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    padding: 50px 20px 0 20px;

    @media (max-width: 768px) {
        padding: 2rem;
        backdrop-filter: blur(0px);
        border: none;
        border: none;
        box-shadow: none;
        width: 85%;
    }
`

const LoginText = styled.span`
    font-size: 2.5rem;
    margin: 0;
    color: #DA4A4B;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const Input = styled.input`
    font-family: "M PLUS Rounded 1c", sans-serif;
    border: 1px solid #ccc;
    width: 85%;
    border-radius: 10px;
    font-size: 1.2rem;
    padding: 10px;
    box-sizing: border-box;

    @media (max-width: 768px) {
        padding-bottom: 0;
        padding-top: 0;
        padding-right: 0;
        width: 80%;
        height: 50px;
        margin-bottom: 10px;
        padding-left: 10px;
        font-size: 1rem;

    }
`


const SubmitButton = styled.button`
    color: #FFFFFF;
    cursor: pointer;
    font-family: "M PLUS Rounded 1c", sans-serif;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    background: #5E5DF0;
    border-radius: 10px;
    box-sizing: border-box;
    border: 0;
    -webkit-user-select: none;
    touch-action: manipulation;
    word-break: break-word;
    font-size: 1.5rem;
    font-weight: 600;
    width: 85%;
    padding: 10px;

    @media (max-width: 768px) {
        outline: 0 solid transparent;
        user-select: none;
        width: 80%;
        padding: 12px;
        margin-top: 10px;
    }
`
const SingGoogle = styled.button`
    font-weight: 700;
    font-family: "M PLUS Rounded 1c", sans-serif;
    border: none;
    background: black;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: #5E5DF0 0 10px 20px -10px;
    width: 85%;
    border-radius: 10px;
    gap: 20px;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 10px;

    @media (max-width: 768px) {
        margin-top: 20px;
        width: 80%;
        height: 60px;
        font-size: 20px;
        padding: 0;
    }

`

const Register = styled.p`
    font-size: 2rem;
    margin: 0;

    @media (max-width: 768px) {
        font-size: 1rem;
    }
`

const Task = styled.img`
    width: 10%;
    position: absolute;
    right: 15%;
    top: 15%;
    transform: rotate(-25deg);
    @media (max-width: 768px) {
        width: 30%;
        top: 20%;
        left: 50%;
        right: 0;
    }
`

const Social = styled.img`
    width: 25%;
    position: absolute;
    top: 52%;

    @media (max-width: 768px) {
        width: 43%;
        top: 37%;
        left: 10%;

    }

`

const Logo = styled.span`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-size: 3rem;
    margin: 0;
    color: #6461F2;
    font-weight: 800;
    cursor: pointer;

    span {
        color: #DA4A4B;
    }

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    font-family: "M PLUS Rounded 1c", sans-serif;

    @media (max-width: 768px) {
        display: none;
    }
`

const RegisterLink = styled(Link)`
    color: #6461F2;
`


const Login = () => {
    const dispatch = useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const isAuth = useSelector(state => state.data.isAuth)
    const navigate = useNavigate()
    const name = useSelector ((state) => state.data.name)
    const img = useSelector ((state) => state.data.img)
    const nameCookie = read_cookie('name')

    useEffect (() => {
        if (isAuth) {
            bake_cookie("img", img)
            bake_cookie("name", name)
            navigate('app')
        }
    }, [isAuth])

    useEffect (() => {
        if (nameCookie.length > 0) {
            navigate('app')
        }
    }, [])

    const handleEmail = (e) => {
        // Set the value of the email input to the value of the event target
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        // Set the value of the password to the value of the input
        setPassword(e.target.value)
    }

    const gogleSingIn = (e) => {
        // Prevent the default behavior of the form and start the process of signing in with Google
        e.preventDefault()
        dispatch(signInGoogle())

    }

    const normalSingIn = (e) => {

        const data = {
            email: email,
            password: password
        }
        e.preventDefault()
        dispatch(NormalSingIn(data))
    }

    return (
        <Container>
            <LoginTitle>
                <Logo>MEAN<span>T</span></Logo>
                <div>
                    Hey, <LoginText>Login Now!</LoginText>
                    <Register>If you are new / <RegisterLink to="/register">Create New</RegisterLink></Register>
                </div>
            </LoginTitle>
            <Task src={task} alt="ciao" />
            <Social src={social}/>

            <LoginForm>
                <FormContainer>
                    <Input type="text" name="email" placeholder="Email" onChange={(e) => handleEmail(e)}/>
                    <Input type="password" name="password" placeholder="Password" onChange={(e) => handlePassword(e)}/>
                    <SubmitButton onClick={(e) => normalSingIn(e)}>Accedi</SubmitButton>
                    <SingGoogle onClick={(e) => gogleSingIn(e)}>Accedi con <Icon icon="logos:google-icon" width="40" height="40" /></SingGoogle>
                </FormContainer>
            </LoginForm>

            <Footer>
                <ToastContainer icon={true} newestOnTop={true} theme="dark" />
                <p>© 2022 Meant. All rights reserved.</p>
            </Footer>
        </Container>
    )
}

export default Login


{/* <HeaderContainer>
                <Title> Landrigram </Title>
            </HeaderContainer>
            <Container>
            <ToastContainer icon={true} newestOnTop={true} theme="dark" />
            <LoginContainer>
                <Circle1></Circle1>
                <FormConteiner>
                    <LoginText>Login</LoginText>
                    <LoginForm>
                        <Input type="text" name="email" placeholder="Email" onChange={(e) => handleEmail(e)}/>
                        <Input type="password" name="password" placeholder="Password" onChange={(e) => handlePassword(e)} />
                        <SubmitButton onClick={(e) => normalSingIn(e)}>ACCEDI</SubmitButton>
                        <SingGoogle onClick={(e) => gogleSingIn(e)}>Accedi con<Icon icon="logos:google-icon" width="40" height="40" /> </SingGoogle>
                        <SingUp>Oppure  <Register to="/register">Registrati</Register></SingUp>
                    </LoginForm>
                </FormConteiner>
            </LoginContainer>
            </Container> */}

