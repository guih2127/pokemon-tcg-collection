import styled from 'styled-components';

const HeaderDiv = styled.div`
  overflow: hidden;
  padding: 10px 10px;
  display: flex;
  height: 70px;
  background-color: #FFFAF0;
`

const HeaderADiv = styled.a`
  float: left;
  color: #DC143C;
  text-align: center;
  padding: 12px;
  text-decoration: none;
  font-size: 26px;
  font-weight : 1000;
  line-height: 25px;
  border-radius: 4px;

  :hover {
      color: pink;
  }
`

const HeaderALogoDiv = styled.div`
  font-size: 25px;
  font-weight: bold;
  width: 100px;
`

const HeaderRight = styled.div`
  margin-left: auto;
  order: 2;
`
// TODO - REACT NAVIGATION
const Header = () => {
    return (
        <HeaderDiv>
            <HeaderALogoDiv href="/">
                <img style={{'width': '50px'}} src={'https://pngimg.com/uploads/pokeball/pokeball_PNG19.png'} alt="Pokeball" />
            </HeaderALogoDiv>
            <HeaderRight> 
                <HeaderADiv class="active" href="#home">Home</HeaderADiv>
                <HeaderADiv href="/contact">Card List</HeaderADiv>
                <HeaderADiv href="/about">My Collection</HeaderADiv>
            </HeaderRight>
        </HeaderDiv>
    );
}

export default Header;