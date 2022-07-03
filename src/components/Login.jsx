import styled from 'styled-components'
import { Icon } from '@iconify/react';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`

const LoginContainer = styled.div`
    width: 40vw;
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
`

const LoginText = styled.h2`
    font-size: 2rem;
    color: white;
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

    :focus {
        box-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.2);
        animation: wobble 0.3s ease-in;
        -webkit-animation: wobble 0.3s ease-in;
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

    :hover {
        box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
        transform: scale(1.02);
        -webkit-transform: scale(1.02);
        -moz-transform: scale(1.02);
        -ms-transform: scale(1.02);
        -o-transform: scale(1.02);
    }
`

const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const SingGoogle = styled.button`
    cursor: pointer;
    background-image: linear-gradient(to right, #efe6f7 0%, #bbb9bd 50%, #908e91 100%);
    color: black;
    padding: 13px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    letter-spacing: 1.5px;
    font-weight: bold;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`



const Login = () => {
    return (
        <Container>
            <LoginContainer>
                <FormConteiner>
                    <LoginText>Login</LoginText>
                    <LoginForm>
                        <Input type="text" name="email" placeholder="Email" />
                        <Input type="password" name="password" placeholder="Password" />
                        <SubmitButton>SUBMIT</SubmitButton>
                        <SingGoogle>Sing with Google <Icon icon="akar-icons:google-fill" width="35" height="35" /> </SingGoogle>
                    </LoginForm>
                </FormConteiner>
            </LoginContainer>
        </Container>
    )
}

export default Login