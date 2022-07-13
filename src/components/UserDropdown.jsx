import styled from 'styled-components'

const Container = styled.div`
    position: absolute;
    top: 130px;
    left: 0;
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

const UserDropdown = () => {
    return (
        <Container>
            ciao
        </Container>
    )
}

export default UserDropdown;