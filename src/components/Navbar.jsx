import styled from 'styled-components'
import { Icon } from '@iconify/react';
import { useSelector, useDispatch } from 'react-redux'
import { setFormOpened } from '../app/app';

const NavbarIcons = [
    {
        id: 1,
        icon: "ant-design:home-filled",
        name: "Home",
    },
    {
        id: 2,
        icon: "carbon:add-filled",
        name: "Upload",
    },
    {
        id: 3,
        icon: "bx:user",
        name: "Profile",
    },
    {
        id: 4,
        icon: "bx:cog",
        name: "Settings",
    }
]


const Container = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;

    @media (min-width: 768px) {
        display: none;
    }
`

const NavbarRow = styled.div`
    background-color: #5E5DF0;
    width: 85%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 40px;
    padding: 10px;
`

const Name = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: white;
`

const Option = styled.div`
    font-family: 'Roboto', sans-serif;
    display: flex;
    align-items: center;
    flex-direction: column;
`



const Navbar = () => {

    const dispatch = useDispatch()
    const formOpened = useSelector((state) => state.app.formOpened)

    return (
        <Container>
            <NavbarRow>
                {NavbarIcons.map((icon) => {
                    return (
                        <Option>
                            <Icon
                            color="white"
                            width="34"
                            key={icon.id}
                            icon={icon.icon}
                            onClick={() => {
                                if (icon.name === "Upload") {
                                    dispatch(setFormOpened())
                                }
                            }
                            }
                            />
                            <Name>{icon.name}</Name>
                        </Option>
                        
                    )
                })}
            </NavbarRow>
        </Container>
    )
}

export default Navbar