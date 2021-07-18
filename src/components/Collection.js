import React, { useEffect, useState } from 'react';
import pokemonCardsAPI from '../api/pokemonCardsAPI';
import CardList from './CardList';
import CardListFilter from './CardListFilter';

const Collection = () => {
    const [cards, setCards] = useState([]);
    const [sets, setSets] = useState([]);
    const [selectedSet, setSelectedSet] = useState(null);

    const createSearchQuery = () => {
        let queryString = '';

        if (selectedSet) {
            queryString += `set.id:${selectedSet.id}`;
        }

        return queryString;
    }
    
    useEffect(() => {
        const getSets = async () => {
            const { data } = await pokemonCardsAPI.get('sets');

            setSets(data.data);
        }

        getSets();
    }, []);

    useEffect(() => {
        createSearchQuery();

        const getCards = async () => {
            const { data } = await pokemonCardsAPI.get('cards', {
                params: { q: createSearchQuery(), pageSize: 16 }
            });
            
            setCards(data.data);
        }

        if (selectedSet) {
            getCards();
        } // ver maneira de obter os sets e apenas depois obter os cards...

    }, [selectedSet]);

    return (
        <div>
            <CardListFilter
                selectedSet={selectedSet}
                setSelectedSet={setSelectedSet}
                sets={sets}
            />
            <CardList cards={cards} />
        </div>
    );
};

export default Collection;