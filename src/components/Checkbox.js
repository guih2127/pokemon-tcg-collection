import react from 'react';

const Checkbox = ({ selectedValue, setSelectedValue, text }) => {

    return (
        <div className="ui slider checkbox">
            <input 
                defaultChecked={selectedValue} 
                type="checkbox" 
                name="newsletter" 
                onChange={() => setSelectedValue(!selectedValue)} />
            <label>{text}</label>
        </div>
    )
}

export default Checkbox;