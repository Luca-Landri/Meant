import styled from 'styled-components'
import { read_cookie } from 'sfcookies';
import { useSelector, useDispatch } from 'react-redux';
import { openDropdown } from '../app/app';
import { useEffect } from 'react';
import UserDropdown from './UserDropdown';


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
    width: 50px;
    height: 50px;
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

    const imgCookie = read_cookie("img")
    const dropdown = useSelector(state => state.app.dropdown)
    const dispatch = useDispatch()
    
    return(
        <HeaderContainer>
            <Title> Landrigram </Title>
            <Propic src={imgCookie} onClick={(e) => {dispatch(openDropdown(e))}}/>
            {dropdown ? <UserDropdown/> : null}
        </HeaderContainer>
    )
}

export default Header