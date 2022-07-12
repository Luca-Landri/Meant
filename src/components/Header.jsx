import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { read_cookie } from 'sfcookies';


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
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

const Propic = styled.img`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    margin-right: 40px;
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border: 3px solid hsla(0, 0%, 65%, 0.158);

    @media (max-width: 768px) {
        width: 45px;
        height: 45px;
    }
`


const Header = () => {

    const img = useSelector(state => state.data.img)
    const imgCookie = read_cookie("img")

    return(
        <HeaderContainer>
            <Title> Landrigram </Title>
            <Propic src={imgCookie}/>
        </HeaderContainer>
    )
}

export default Header