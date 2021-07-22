import React from 'react';
import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import orderOptions from '../options/orderOptions';
import pageOptions from '../options/pageOptions';
import subTypeOptions from '../options/subTypeOptions';
import Checkbox from './Checkbox';

const CardListFilter = ({ 
        sets, 
        selectedSet, 
        setSelectedSet, 
        pageSize, 
        setPageSize, 
        order, 
        setOrder,
        onlyUserCards,
        setOnlyUserCards,
        series,
        setSelectedSerie,
        selectedSerie,
        subtype,
        setSubtype,
        rarities,
        setSelectedRarity,
        selectedRarity
    }) => {

    const DivCardFilter = styled.div`
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    `;
    
    return (
        <DivCardFilter>
            <Checkbox
                selectedValue={onlyUserCards}
                setSelectedValue={setOnlyUserCards}
                text={"Only collection cards"}
            />

            <Dropdown
                options={pageOptions}
                label={"Page size"}
                selectedOption={pageSize}
                setSelectedOption={setPageSize}
            />
            
            <Dropdown
                options={orderOptions}
                label={"Order"}
                selectedOption={order}
                setSelectedOption={setOrder}
            />

            <Dropdown
                options={series}
                label={"Serie"}
                selectedOption={selectedSerie}
                setSelectedOption={setSelectedSerie}
            />

            <Dropdown
                options={sets}
                label={"Set"}
                selectedOption={selectedSet}
                setSelectedOption={setSelectedSet}
            />

            <Dropdown
                options={subTypeOptions}
                label={"Sub Type"}
                selectedOption={subtype}
                setSelectedOption={setSubtype}
            />

            <Dropdown
                options={rarities}
                label={"Rarity"}
                selectedOption={selectedRarity}
                setSelectedOption={setSelectedRarity}
            />
        </DivCardFilter>
    );
};

export default CardListFilter;