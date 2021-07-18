import React from 'react';
import Dropdown from '../components/Dropdown';

const CardListFilter = ({ sets, selectedSet, setSelectedSet }) => {
    return (
        <div>
            <Dropdown
                options={sets}
                label={"Set"}
                selectedOption={selectedSet}
                setSelectedOption={setSelectedSet}
            />
        </div>
    );
};

export default CardListFilter;