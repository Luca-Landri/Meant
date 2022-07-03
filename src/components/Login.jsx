import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
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
`

const SubmitButton = styled.button`
    background-color: #0f3460;
    color: #ffffff;
    padding: 13px;
    border-radius: 5px;
    outline: none;
    font-size: 18px;
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



const Login = () => {
    return (
        <Container>
            <LoginContainer>
                <FormConteiner>
                    <LoginText>Login</LoginText>
                    <LoginForm>
                        <Input type="text" placeholder="USERNAME" />
                        <Input type="password" placeholder="PASSWORD" />
                        <SubmitButton class="opacity">SUBMIT</SubmitButton>
                    </LoginForm>
                </FormConteiner>
            </LoginContainer>
        </Container>
    )
}

export default Login