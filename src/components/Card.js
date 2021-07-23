import styled from 'styled-components';

const CardImage = styled.img`
    width: 285px;
    height: 375px;
`

const CardContainer = styled.div`
    margin: 15px;
    border: 2px solid #FFFAF0;
    background-color: #FFFAF0;
`

const AddToCollectionDiv = styled.div`
    cursor: pointer;
    background-color: #228B22;
    color: black;
    padding: 5px;
    border-top: 3px solid white;
`

const RemoveFromCollectionDiv = styled.div`
    cursor: pointer;
    background-color: #B22222;
    color: black;
    padding: 5px;
    border-top: 3px solid white;
`

const DivCardInfos = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
`

const DivCardInfo = styled.div`
    font-size: 16px;
    font-weight: 1000;
    color: #FFFAF0;
    margin: 10px;
`
const SpanCollection = styled.div`
    font-size: 16px;
    font-weight: 1000;
    color: #FFFAF0;
`

const Card = ({ id, name, image, type, rarity, set, addToCollection, removeFromCollection, isUserCard }) => {
    const ConditionalAddToCollectionDiv = () => {
        if (!isUserCard) {
            return (
                <AddToCollectionDiv onClick={() => addToCollection(id)}>
                    <SpanCollection>Add to Collection</SpanCollection>
                </AddToCollectionDiv>
            );
        }
        
        return (
            <RemoveFromCollectionDiv onClick={() => removeFromCollection(id)}>
                <SpanCollection>Remove from Collection</SpanCollection>
            </RemoveFromCollectionDiv>
        );
    };

    return (
        <CardContainer>
            <div>
                <CardImage src={image} alt={name} />
            </div>
            <DivCardInfos style={{'backgroundColor': isUserCard ? '#228B22' : '#ff3333'}}>
                <DivCardInfo href="/">
                    Name: {name}
                </DivCardInfo>
                <DivCardInfo>
                    Type: {type}
                </DivCardInfo>
                <DivCardInfo>
                    Set: {set}
                </DivCardInfo>
                <DivCardInfo>
                    Rarity: {rarity ? rarity : 'Especial'}
                </DivCardInfo>
            </DivCardInfos>
            <ConditionalAddToCollectionDiv />
        </CardContainer>
    );
};

export default Card;