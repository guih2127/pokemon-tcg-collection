import React from 'react';
import styled from 'styled-components';
import Dropdown from '../components/Dropdown';
import orderOptions from '../options/orderOptions';
import pageOptions from '../options/pageOptions';

const CardListFilter = ({ sets, selectedSet, setSelectedSet, pageSize, setPageSize, order, setOrder }) => {
    const DivCardFilter = styled.div`
        margin: 10px;
        padding: 10px;
        border: 1px solid black;
    `;

    return (
        <DivCardFilter>
            <Dropdown
                options={pageOptions}
                label={"Page size"}
                selectedOption={pageSize}
                setSelectedOption={setPageSize}
            />

            <Dropdown
                options={sets}
                label={"Set"}
                selectedOption={selectedSet}
                setSelectedOption={setSelectedSet}
            />

            <Dropdown
                options={orderOptions}
                label={"Order"}
                selectedOption={order}
                setSelectedOption={setOrder}
            />
        </DivCardFilter>
    );
};

export default CardListFilter;