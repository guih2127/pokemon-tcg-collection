import styled from 'styled-components';

const CardImage = styled.img`
    min-width: 290px;
    max-width: 290px;
    min-height: 400px;
    max-height: 400px;
`

const CardContainer = styled.div`
    margin: 5px;
`

const Card = ({ name, image, type, rarity, set }) => {
    return (
        <CardContainer>
            <div className="ui card">
                <div className="image">
                    <CardImage src={image} alt={name} />
                </div>
                <div className="content">
                    <a className="header" href="/">
                        {name}
                    </a>
                    <div className="meta">
                        <span>{type}</span>
                    </div>
                    <div className="description">
                        {set}
                    </div>
                    <div className="extra content">
                        {rarity ? rarity : 'Especial'}
                    </div>
                </div>
            </div>
        </CardContainer>
    );
};

export default Card;