import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { setEmail, setPassword, setPassword2 } from '../app/Register'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70vh;
`

const RegisterContainer = styled.div`
    width: 40vw;

    @media (max-width: 768px) {
        width: 90vw;  
        height: 45vh;
    }
`

const FormContainer = styled.div`
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

const RegisterText = styled.h2`
    margin: 0;
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

const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const HelloImg = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
`

const RegisterTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`


const Register = () => {

    const email = useSelector((state) => state.register.email)
    const password = useSelector((state) => state.register.password)
    const password2 = useSelector((state) => state.register.password2)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        const auth = getAuth();
        if (password !== password2) {
            toast.error("Passwords do not match, try again")
        } else {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setEmail(''))
                dispatch(setPassword(''))
                dispatch(setPassword2(''))
                navigate('/app')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
        }
    }

    return (
        <Container>
            <ToastContainer icon={true} newestOnTop={true} theme="dark" />
            <RegisterContainer>
                <FormContainer>
                    <RegisterTitle>
                        <RegisterText>Hi new user!</RegisterText>
                        <HelloImg src="https://c.tenor.com/pvFJwncehzIAAAAM/hello-there-private-from-penguins-of-madagascar.gif" alt="" />
                    </RegisterTitle>
                    <RegisterForm>
                        <Input type="text" name="email" placeholder='Your Email' onChange={(e) => dispatch(setEmail(e.target.value))}/>
                        <Input type="password" name="password1" placeholder='Your password' onChange={(e) => dispatch(setPassword(e.target.value))}/>
                        <Input type="password" name="password2" placeholder='Confirm your password' onChange={(e) => dispatch(setPassword2(e.target.value))}/>
                        <SubmitButton onClick={(e) => handleSubmit(e)}>CREATE YOUR ACCOUNT</SubmitButton>
                    </RegisterForm>
                </FormContainer>
            </RegisterContainer>
        </Container>
    )
}

export default Register;