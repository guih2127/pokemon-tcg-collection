import React from 'react';
import styled from 'styled-components';
import Card from './Card';
import Loader from './Loader';

const Component = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    text-align: center;
`

const CardList = ({ cards, loading }) => {
    const renderedCards = cards.map(card => {
        return (
            <Card
                key={card.id}
                name={card.name} 
                image={card.images.small} 
                type={card.supertype} 
                set={card.set.name} 
                rarity={card.rarity} 
            />
        );
    });

    if (loading) {
        return (
            <Component>
                <Loader />
            </Component>
        );
    }

    return (
        <Component>
            {renderedCards}
        </Component>
    );
};

export default CardList;