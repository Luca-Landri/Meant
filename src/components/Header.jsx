import styled from 'styled-components'
import { read_cookie } from 'sfcookies';
import { useSelector, useDispatch } from 'react-redux';
import { openDropdown } from '../app/app';
import { useEffect } from 'react';
import UserDropdown from './UserDropdown';
import { Icon } from '@iconify/react';


const Title = styled.span`
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    color: #6461F2;
    font-size: 2.2rem;
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 30px;
    cursor: pointer;

    @media (max-width: 768px) {
        font-size: 2rem;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 2%;
`

const Propic = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 15px;
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border: 3px solid hsla(0, 0%, 65%, 0.158);

    @media (max-width: 768px) {
        width: 55px;
        height: 55px;
    }
`

const UserContainer = styled.div`
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
`

const DropdownIcon = styled(Icon)`
    :hover {
        cursor: pointer;
        opacity: 0.6;
    }
    @media (max-width: 768px) {
        display: none;
    }
`


const Header = () => {

    const imgCookie = read_cookie("img")
    const dropdown = useSelector(state => state.app.dropdown)
    const dispatch = useDispatch()
    
    return(
        <HeaderContainer>
            <Title> MEANT </Title>
            <UserContainer onClick={(e) => {dispatch(openDropdown(e))}}>
                <Propic src={imgCookie}/>
                <DropdownIcon icon="gridicons:dropdown" color='black' width="30px" height="30px"/>
            </UserContainer>
            {dropdown ? <UserDropdown/> : null}
        </HeaderContainer>
    )
}

export default Header