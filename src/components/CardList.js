import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Component = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const CardList = ({ cards }) => {
    const renderedCards = cards.map(card => {
        return (
            <Card
                key={card.id}
                name={card.name} 
                image={card.images.large} 
                type={card.supertype} 
                set={card.set.name} 
                rarity={card.rarity} 
            />
        );
    });

    return (
        <Component>
            {renderedCards}
        </Component>
    );
};

export default CardList;