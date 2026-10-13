import './Tile.css';

export default function Tile({value = 1}) {
    return <div className='tile'>
        {value ?? <input type='number' min={1} max={9} step={1} />}
    </div>
}