import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { read_cookie } from 'sfcookies';
import { useSelector, useDispatch } from 'react-redux';
import { setFormOpened, openDropdown } from '../app/app';

const UserChoice = [
    {
        id: 1,
        icon: "mdi:account-circle",
        name: "Your Profile",
        link: "/app/profile"
    },
    {
        id: 3,
        icon: "mdi:tray-arrow-up",
        name: "Upload",
        link: "/app/upload"
    },
    {
        id: 4,
        icon: "mdi:cog-outline",
        name: "Settings",
        link: "/app/settings"
    },
    {
        id: 5,
        icon: "mdi:help-circle",
        name: "Help",
        link: "/app/help"
    },
    {
        id: 6,
        icon: "mdi:information-variant",
        name: "About",
        link: "/app/about"
    },
    {
        id: 2,
        icon: "mdi:logout-variant",
        name: "Sing Out",
        link: "/app/logout"
    }
]

const Container = styled.div`
    position: absolute;
    top: 75px;
    right: 20px;
    border: 1px solid hsla(0, 0%, 65%, 0.158);
    box-shadow: 0 0 36px 1px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    backdrop-filter: blur(20px);
    z-index: 99;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    -ms-border-radius: 10px;
    -o-border-radius: 10px;
    color: white;

    @media (max-width: 768px) {
        display: none;
    }
`

const Option = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: flex;
    padding-left: 15px;
    padding-right: 30px;
    padding-top: 7px;
    padding-bottom: 7px;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    opacity: 0.6;
    border-bottom: 1px solid hsla(0, 0%, 65%, 0.158);
    &:hover {
        background-color: hsla(229, 100%, 59%, 1);
        opacity: 1;
    }
`

const User = styled.div`
    font-family: 'Roboto', sans-serif;
    opacity: 0.6;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 0.9rem;
    padding-left: 10px;
    padding-bottom: 5px;
    padding-top: 5px;
`

const Name = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    justify-content: left;
    padding-left: 10px;
    padding-bottom: 5px;
`

const ChoiceName = styled.h4`
    margin: 0;
    display: flex;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    padding-left: 12px;
    
`

const UserDropdown = () => {

    const nameCookie = read_cookie("name")
    const form = useSelector(state => state.app.formOpened)
    const dispatch = useDispatch()


    return (
        <Container>
            <User>
                Loggato come
            </User>
            <Name>{nameCookie}</Name>
            {UserChoice.map(choice => (
                <Option key={choice.id} onClick={() => {
                        if (choice.name === "Upload") {
                            dispatch(setFormOpened())
                            dispatch(openDropdown())
                        }
                    }}>
                    <Icon icon={choice.icon} width="24px" height="24px"/>
                    <ChoiceName>{choice.name}</ChoiceName>
                </Option>
            ))}
        </Container>
    )
}

export default UserDropdown;