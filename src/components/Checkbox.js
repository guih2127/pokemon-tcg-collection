import react from 'react';

const Checkbox = ({ selectedValue, setSelectedValue, text }) => {

    return (
        <div style={{'padding': '10px'}} className={"ui toggle checkbox"}>
            <input 
                defaultChecked={selectedValue} 
                type="checkbox" 
                name="collection" 
                onChange={() => setSelectedValue(!selectedValue)} />
            <label style={{'fontSize': '18px', 'color': 'white', 'fontWeight': 1000}}>{text}</label>
        </div>
    )
}

export default Checkbox;