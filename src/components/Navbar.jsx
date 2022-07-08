import styled from 'styled-components'
import { Icon } from '@iconify/react';

const Container = styled.div`
    position: absolute;
    bottom: 15px;
    width: 100%;

    @media (min-width: 768px) {
        display: none;
    }
`

const NavbarRow = styled.div`
    background-color: purple;
    width: 85%;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    gap: 55px;
    padding: 10px;
`



const Navbar = () => {
    return (
        <Container>
            <NavbarRow>
                <Icon icon="ant-design:home-filled" color="white" width="34" height="34" />
                <Icon icon="carbon:add-filled" color="white" width="34" height="34"/>
                <Icon icon="bx:user" color="white" width="34" height="34"/>
            </NavbarRow>
        </Container>
    )
}

export default Navbar