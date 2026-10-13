import './Tile.css';

export default function Tile({value = 1}) {
    return <div className='tile'>
        {value}
    </div>
}