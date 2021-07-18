import React, { useEffect, useState, useRef } from 'react';

const Select = ({ options, label, selectedOption, setSelectedOption }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();
    
    useEffect(() => {
        if (!selectedOption && options) {
            setSelectedOption(options[0]);
        }
    });

    useEffect(() => {
        const onBodyClick = (event) => {
            if (ref.current.contains(event.target)) {
                return;
            };
        
            setOpen(false);
        };

        document.body.addEventListener('click', onBodyClick, {capture: true});

        return () => {
            document.body.removeEventListener('click', onBodyClick, {capture: true});
        };

    }, []);

    const renderSelectedOptions = options.map(option => {
        return (
            <div 
                className="item" 
                value={option.id}
                onClick={() => setSelectedOption(option)}
                key={option.id}
            >
                {option.name}
            </div>
        );
    });

    return (
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">{label}</label>
                <div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className="dropdown icon"></i>
                    <div className="text">{selectedOption ? selectedOption.name : ''}</div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderSelectedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Select;