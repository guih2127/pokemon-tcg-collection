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

const AddToCollectionDiv = styled.div`
    border: 1px solid black;
    cursor: pointer;
`

const Card = ({ id, name, image, type, rarity, set, addToCollection, removeFromCollection, isUserCard }) => {
    const ConditionalAddToCollectionDiv = () => {
        if (!isUserCard) {
            return (
                <AddToCollectionDiv onClick={() => addToCollection(id)}>
                    Adicionar à coleção
                </AddToCollectionDiv>
            );
        }
        
        return (
            <AddToCollectionDiv onClick={() => removeFromCollection(id)}>
                Remover da coleção
            </AddToCollectionDiv>
        );
    };

    return (
        <CardContainer>
            <div className="ui card" style={isUserCard ? { 'backgroundColor': 'green' } : {'backgroundColor': 'red'}}>
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
                <ConditionalAddToCollectionDiv />
            </div>
        </CardContainer>
    );
};

export default Card;