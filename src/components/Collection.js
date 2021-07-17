import React, { useEffect, useState } from 'react';
import pokemonCardsAPI from '../api/pokemonCardsAPI';
import CardList from './CardList';

const Collection = () => {
    const [cards, setCards] = useState([]);
    const [sets, setSets] = useState([]);

    const [selectedSet, setSelectedSet] = useState(sets[0]);

    useEffect(() => {
        
        const getSets = async () => {
            const { data } = await pokemonCardsAPI.get('sets');

            setSets(data.data);
        }

        getSets();
    }, []);

    useEffect(() => {
        const getCards = async () => {
            const { data } = await pokemonCardsAPI.get('cards', {
                params: { pageSize: 16 }
            });
            
            setCards(data.data);
        }

        getCards();
        console.log(selectedSet);
    }, [selectedSet]);

    return (
        <div>
            <CardList cards={cards} />
        </div>
    );
};

export default Collection;