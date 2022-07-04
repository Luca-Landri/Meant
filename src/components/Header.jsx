import styled from 'styled-components'

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
`


const Header = () => {
    return(
        <HeaderContainer>
            <Title> Landrigram </Title>
        </HeaderContainer>
    )
}

export default Header