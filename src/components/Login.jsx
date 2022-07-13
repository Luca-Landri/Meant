import { useState } from 'react';
import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux'
import { signInGoogle, NormalSingIn } from '../app/Data';
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import blob from '../../assets/blob.png'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { bake_cookie, read_cookie } from 'sfcookies';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`

const LoginContainer = styled.div`
    width: 40vw;

    @media (max-width: 768px) {
        width: 90vw;  
        height: 45vh;
    }
`
const FormConteiner = styled.div`
    border: 1px solid hsla(0, 0%, 65%, 0.158);
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    z-index: 99;
    padding: 2rem;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;

    @media (max-width: 768px) {
        padding: 2rem;
        backdrop-filter: blur(0px);
        border: none;
    }
`

const LoginText = styled.h2`
    font-size: 2.3rem;
    color: white;
    font-family: "Poppins", sans-serif;
    opacity: 0.6;
`

const Input = styled.input`
    padding: 14.5px;
    width: 100%;
    margin: 1rem 0;
    color: #ffffff;
    outline: none;
    background-color: #9191911f;
    border: none;
    border-radius: 5px;
    font-weight: 500;
    letter-spacing: 0.8px;
    font-size: 15px;
    backdrop-filter: blur(15px);
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;

    @media (max-width: 768px) {
        backdrop-filter: blur(0px);
        
    }

`

const SubmitButton = styled.button`
    background-image: linear-gradient(to right, #A149FA 0%, #ab62f5 50%, #c496f2 100%);
    color: #ffffff;
    padding: 13px;
    border-radius: 5px;
    outline: none;
    font-size: 20px;
    letter-spacing: 1.5px;
    font-weight: bold;
    width: 100%;
    cursor: pointer;
    margin-bottom: 2rem;
    transition: all 0.1s ease-in-out;
    border: none;
    -webkit-border-radius: 5px;
    -moz-border-radius: 5px;
    -ms-border-radius: 5px;
    -o-border-radius: 5px;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SingGoogle = styled.button`
    cursor: pointer;
    background-image: #fff;
    color: black;
    padding: 13px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    letter-spacing: 1.5px;
    font-weight: bold;
    width: 65%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
`


const Circle1 = styled.div`
    width: 8.5rem;
    height: 8.5rem;
    background: linear-gradient(to right, #A149FA 0%, #ab62f5 50%, #c496f2 100%);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: relative;
    top: 130px;
    left: 0;
    transform: translate(-45%, -45%);
    -webkit-transform: translate(-45%, -45%);
    -moz-transform: translate(-45%, -45%);
    -ms-transform: translate(-45%, -45%);
    -o-transform: translate(-45%, -45%);

    @media (max-width: 768px) {
        display: none;
    }
`

const SingUp = styled.span`
    color: #fff;
    font-family: "Poppins", sans-serif;
    margin-top: 20px;
    opacity: 0.6;
`

const Circle2 = styled.div`
    width: 8rem;
    height: 8rem;
    background: linear-gradient(to right, #c496f2 0%, #ab62f5 50%, #A149FA 100%);
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    -ms-border-radius: 50%;
    -o-border-radius: 50%;
    position: relative;
    bottom: 110px;
    right: -80%;
    transform: translate(45%, 45%);
    -webkit-transform: translate(45%, 45%);
    -moz-transform: translate(45%, 45%);
    -ms-transform: translate(45%, 45%);
    -o-transform: translate(45%, 45%);

    @media (max-width: 768px) {
        display: none;
    }
`
const Blob = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
    transform: rotatey(180deg);
    width: 20%;

    @media (max-width: 768px) {
        display: none;
    }
`

const Register = styled(Link)`
    color: #fff;
`

const Title = styled.span`
    font-family: 'Pacifico', sans-serif;
    color: white;
    font-size: 2.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`

const HeaderContainer = styled.div`
    border-bottom: 1px solid hsla(0, 0%, 65%, 0.158);
    display: flex;
    justify-content: left;
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
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
            navigate('/app')
        }
    }, [isAuth])

    useEffect (() => {
        if (nameCookie.length > 0) {
            navigate('/app')
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
        <div>
            <HeaderContainer>
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
                <Circle2></Circle2>
            </LoginContainer>
            <Blob src={blob} alt="" />
            </Container>
        </div>
    )
}

export default Login