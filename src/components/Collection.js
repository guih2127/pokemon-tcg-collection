import React, { useEffect, useState } from 'react';
import pokemonCardsAPI from '../api/pokemonCardsAPI';
import CardList from './CardList';
import CardListFilter from './CardListFilter';
import axios from 'axios';
import orderOptions from '../options/orderOptions';
import pageOptions from '../options/pageOptions';
import rarityOptions from '../options/rarityOptions';

const Collection = () => {
    const [cards, setCards] = useState([]);
    const [sets, setSets] = useState([]);
    const [userCards, setUserCards] = useState([]);
    const [series, setSeries] = useState([]);
    const [subtype, setSubtype] = useState(null);
    const [rarities, setRarities] = useState(rarityOptions(subtype));

    const [selectedSet, setSelectedSet] = useState(null);
    const [onlyUserCards, setOnlyUserCards] = useState(false);
    const [selectedSerie, setSelectedSerie] = useState(null);
    const [selectedRarity, setSelectedRarity] = useState(null);

    const [pageSize, setPageSize] = useState(pageOptions[0]);
    const [order, setOrder] = useState(orderOptions[0]);

    const [cardlistLoading, setCardListLoading] = useState(true);

    const getFirstWord = (str) => {
        let spaceIndex = str.indexOf(' ');
        return spaceIndex === -1 ? str : str.substr(0, spaceIndex);
    };

    const getUserCards = async () => {
        const config = {
            headers: { Authorization: `Bearer ${JSON.parse(localStorage.getItem('token')).token}` }
        };

        const data = await axios.get('https://localhost:44313/api/UserCard/cards', config);

        setUserCards(data.data);
    }
    
    const getCards = async () => {
        setCardListLoading(true);
        const { data } = await pokemonCardsAPI.get('cards', {
            params: { q: createSearchQuery() !== '()' ? createSearchQuery() : null, pageSize: pageSize.value, orderBy: order.value }
        });
        
        setCards(data.data);
        setCardListLoading(false);
    }

    const getSets = async () => {
        const { data } = await pokemonCardsAPI.get('sets', {
            params: { orderBy: 'name' }
        });

        setSets(data.data);

        let series = [...new Set(data.data.map(item => item.series))];

        series = series.map((serie, index) => {
            return { name: serie, id: index };
        });
        setSeries(series);
    }

    const createSearchQuery = () => {
        let queryString = '';

        queryString += '(';

        if (selectedSerie) {
            let setsFromSerie = sets.filter(set => {
                return set.series === selectedSerie.name;
            })

            console.log(setsFromSerie);

            setSets(setsFromSerie);

            queryString += `set.series:${getFirstWord(selectedSerie.name)} `
        }

        if (selectedSet) {
            queryString += `set.id:${selectedSet.id} `;
        }

        if (subtype) {
            setRarities(rarityOptions(subtype));

            if (subtype.id) {
                queryString += `subtypes:${subtype.id} `;
            }
        }

        if (selectedRarity) {
            if (selectedRarity.id) {
                queryString += `rarity:${selectedRarity.id} `;
            }
        }

        if (onlyUserCards) {
            let stringCardIds = '';
            queryString += '('

            userCards.forEach((cardId, index) => {
                if (index > 0) {
                    stringCardIds = stringCardIds.concat(' or ')
                }

                stringCardIds = stringCardIds.concat(`id:${cardId}`);
            })

            queryString += stringCardIds;
            queryString += ')'
        }

        queryString += ')'

        return queryString;
    }

    useEffect(() => {
        setSelectedRarity(rarities[0]);
    }, [subtype])
    
    useEffect(() => {
        getSets();
        getUserCards();
    }, []);

    useEffect(() => {
        createSearchQuery();
        getCards();
    }, [selectedSet, selectedSerie, selectedRarity, subtype, pageSize, order, onlyUserCards]);

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
                onlyUserCards={onlyUserCards}
                setOnlyUserCards={setOnlyUserCards}
                series={series}
                setSelectedSerie={setSelectedSerie}
                selectedSerie={selectedSerie}
                subtype={subtype}
                setSubtype={setSubtype}
                setSelectedRarity={setSelectedRarity}
                selectedRarity={selectedRarity}
                rarities={rarities}
            />
            <CardList 
                cards={cards}
                loading={cardlistLoading}
                userCards={userCards}
                getUserCards={getUserCards}
            />
        </div>
    );
};

export default Collection;