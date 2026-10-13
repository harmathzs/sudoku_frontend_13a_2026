import Tile from "./Tile";

import './Board.css';

export default function Board({children = {} }) {
    // console.log('Board props', props) // props.children.puzzle, props.children.solution
    // console.log('Board children', children)
    const {puzzle, solution} = children
    console.log('puzzle', puzzle)
    console.log('solution', solution)

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