import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { read_cookie } from 'sfcookies';

const UserChoice = [
    {
        id: 1,
        icon: "mdi:account-circle",
        name: "Profile",
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
        name: "Logout",
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
`

const Option = styled.div`
    font-family: "Poppins", sans-serif;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    padding: 10px 20px;
    border-bottom: 1px solid hsla(0, 0%, 65%, 0.158);
    &:hover {
        background-color: hsla(0, 0%, 65%, 0.158);
    }
`

const User = styled.div``

const UserDropdown = () => {

    const nameCookie = read_cookie("name")


    return (
        <Container>
            <User>
                Loggato come <span>{nameCookie}</span>
            </User>
            {UserChoice.map(choice => (
                <Option key={choice.id}>
                    <Icon icon={choice.icon}/>
                    {choice.name}
                </Option>
            ))}
        </Container>
    )
}

export default UserDropdown;