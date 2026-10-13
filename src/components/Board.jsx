import Tile from "./Tile";

import './Board.css';

export default function Board() {
    return <div className="board">
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