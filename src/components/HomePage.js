import styled from "styled-components";
import Footer from './Footer';

const AppDiv = styled.div`
    display: flex;
    background-color: #DC143C;
    min-height: 1200px;
    padding-top: 70px;
`

const HomeDiv = styled.div`
    text-align: center;
    position: absolute;
    top: 50%;
    left: 28%;
`

const HomeSpan = styled.span`
    font-size: 48px;
    color: #FFFAF0;
`

const HomePage = () => {
    return (
        <div>
            <AppDiv>
                <HomeDiv>
                    <HomeSpan>Aqui você consegue organizar sua coleção de Pokémon TCG!</HomeSpan>
                </HomeDiv>
            </AppDiv>
            <Footer />
        </div>
    );
};

export default HomePage;