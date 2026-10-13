import { useState } from 'react';
import './Tile.css';

export default function Tile({value = 0}) {
    const [newNumber, setNewNumber] = useState(0)

    const handleInputNumberChange = (e) => {
        // console.log('handleInputNumberChange e', e) // e.target.value
        let newNumber = +e.target?.value || 0
        if (newNumber<0) newNumber = 0;
        if (newNumber>9) newNumber = 9;
        console.log('newNumber', newNumber)
        setNewNumber(newNumber)
    }

    return <div className='tile'>
        {value ?? <input 
            type='number' min={0} max={9} step={1} 
            onChange={handleInputNumberChange}
            value={newNumber}
            />}
    </div>
}