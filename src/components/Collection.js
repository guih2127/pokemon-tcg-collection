import React, { useEffect, useState } from 'react';
import pokemonCardsAPI from '../api/pokemonCardsAPI';
import CardList from './CardList';
import CardListFilter from './CardListFilter';

const Collection = () => {
    const [cards, setCards] = useState([]);
    const [sets, setSets] = useState([]);

    const [selectedSet, setSelectedSet] = useState(null);
    const [pageSize, setPageSize] = useState(null);
    const [order, setOrder] = useState(null);

    const [cardlistLoading, setCardListLoading] = useState(true);

    const createSearchQuery = () => {
        let queryString = '';

        if (selectedSet) {
            queryString += `set.id:${selectedSet.id}`;
        }

        return queryString;
    }
    
    useEffect(() => {
        const getSets = async () => {
            const { data } = await pokemonCardsAPI.get('sets', {
                params: { orderBy: 'name' }
            });

            setSets(data.data);
        }

        getSets();
    }, []);

    useEffect(() => {
        createSearchQuery();

        const getCards = async () => {
            setCardListLoading(true);
            const { data } = await pokemonCardsAPI.get('cards', {
                params: { q: createSearchQuery(), pageSize: pageSize.value, orderBy: order.value }
            });
            
            setCards(data.data);
            setCardListLoading(false);
        }

        if (selectedSet) {
            getCards();
        } // ver maneira de obter os sets e apenas depois obter os cards...

    }, [selectedSet, pageSize, order]);

    return (
        <div>
            <CardListFilter
                selectedSet={selectedSet}
                setSelectedSet={setSelectedSet}
                pageSize={pageSize}
                setPageSize={setPageSize}
                order={order}
                setOrder={setOrder}
                sets={sets}
            />
            <CardList 
                cards={cards}
                loading={cardlistLoading}
            />
        </div>
    );
};

export default Collection;