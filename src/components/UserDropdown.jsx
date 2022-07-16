import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { read_cookie } from 'sfcookies';
import { useSelector, useDispatch } from 'react-redux';
import { setFormOpened, openDropdown } from '../app/app';
import { motion } from "framer-motion"

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
    position: relative;
    z-index: 99;
    padding-top: 15px;
    padding-bottom: 15px;
    box-shadow: -0.713381px 17.9859px 47px rgba(51, 38, 174, 0.13), -0.361149px 9.10534px 20.4891px rgba(51, 38, 174, 0.08775), -0.142676px 3.59717px 7.6375px rgba(51, 38, 174, 0.065), -0.0312104px 0.786881px 2.71719px rgba(51, 38, 174, 0.04225);
    border-radius: 10px;
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

const Option = styled(motion.div)`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    display: flex;
    color: black;
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 7px;
    padding-bottom: 7px;
    align-items: center;
    justify-content: left;
    cursor: pointer;
    opacity: 0.6;
    border-bottom: 1px solid hsla(0, 0%, 65%, 0.158);
    user-select: none;
    &:hover {
        background-color: #DA4A4B;
        opacity: 1;
        color: white;
    }
`

const User = styled.div`
    color: black;
    font-family: "M PLUS Rounded 1c", sans-serif;
    opacity: 0.6;
    font-weight: 600;
    display: flex;
    justify-content: left;
    align-items: center;
    font-size: 0.9rem;
    padding-left: 23px;
    padding-bottom: 5px;
    padding-top: 5px;
`

const Name = styled.div`
    color: black;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    font-size: 1rem;
    display: flex;
    justify-content: left;
    padding-left: 25px;
    padding-bottom: 5px;
`

const ChoiceName = styled.h4`
    margin: 0;
    display: flex;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 600;
    padding-left: 12px;
    
`

const IperContainer = styled(motion.div)`
    position: absolute;
    top: 11%;
    right: 35px;
`

const UserDropdown = () => {

    const nameCookie = read_cookie("name")
    const form = useSelector(state => state.app.formOpened)
    const dispatch = useDispatch()


    return (
        <IperContainer>
            <Container>
                <User>
                    Loggato come
                </User>
                <Name>{nameCookie}</Name>
                {UserChoice.map(choice => (
                    <Option  whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}key={choice.id} onClick={() => {
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
        </IperContainer>
    )
}

export default UserDropdown;