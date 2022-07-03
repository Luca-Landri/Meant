import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`

const LoginContainer = styled.div`
    position: relative;
    width: 22.2rem;
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



const Login = () => {
    return (
        <Container>
            <LoginContainer>
                <FormConteiner>
                    <LoginText>Login</LoginText>
                    <form action="">
                        <input type="text" placeholder="USERNAME" />
                        <input type="password" placeholder="PASSWORD" />
                        <button class="opacity">SUBMIT</button>
                    </form>
                </FormConteiner>
            </LoginContainer>
        </Container>
    )
}

export default Login