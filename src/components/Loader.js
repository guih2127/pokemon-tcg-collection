import styled from "styled-components";

const DivLoader = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -50px 0px 0px -50px;
`

const Loader = () => {
    return (
        <DivLoader>
            <div className="ui active centered inline loader"></div>
        </DivLoader>
    );
};

export default Loader;