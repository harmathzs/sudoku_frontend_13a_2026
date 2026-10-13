import Tile from "./Tile";

import './Board.css';

export default function Board(props) {
    console.log('Board props', props) // props.children.puzzle, props.children.solution

    return <div className="board">
        <div className="row">
            <Tile />
            <Tile value={2} />
            <Tile value={null} />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>
        <div className="row">
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
            <Tile />
        </div>        
    </div>
}