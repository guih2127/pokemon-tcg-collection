import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Loader from './Loader';
import axios from 'axios';

const Component = styled.div`
    display: flex;
    flex-wrap: wrap;
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    text-align: center;
`

const CardList = ({ cards, loading }) => {
    const [userCards, setUserCards] = useState([]);

    const getUserCards = async () => {
        const config = {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).token}` }
        };

        const data = await axios.get('https://localhost:44313/api/UserCard/cards', config);

        setUserCards(data.data);
    }

    useEffect(() => {
        getUserCards();
    }, []);

    const addToCollection = async (id) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).token}` }
            };
    
            const resp = await axios.post(`https://localhost:44313/api/UserCard/${id}`, {}, config);
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    
        getUserCards();
    };

    const removeFromCollection = async (id) => {
        try {
            const config = {
                headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).token}` }
            };
    
            const resp = await axios.delete(`https://localhost:44313/api/UserCard/${id}`, config, {});
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    
        getUserCards();
    };

    const renderedCards = cards.map(card => {
        return (
            <Card
                key={card.id}
                id={card.id}
                name={card.name} 
                image={card.images.small} 
                type={card.supertype} 
                set={card.set.name} 
                rarity={card.rarity}
                isUserCard={userCards.includes(card.id) ? true : false}
                addToCollection={addToCollection}
                removeFromCollection={removeFromCollection}
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