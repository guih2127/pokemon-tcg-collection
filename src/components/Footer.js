import styled from "styled-components";

const FooterDiv = styled.div`
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    background-color: #FFFAF0;
    text-align: center;
    display: flex;
    padding: 40px 10px;
`;

const SpanDiv = styled.div`
    font-size: 20px;
    color: #DC143C;
`

const Footer = () => {
    return (
        <FooterDiv>
            <SpanDiv>
                Pequena aplicação pra você organizar sua coleção de pokémon!
                Agradecemos à api Pokémon TCG Developers por disponibilizar
                tantas infos boas pra gente!
            </SpanDiv>
        </FooterDiv>
    );
};

export default Footer;