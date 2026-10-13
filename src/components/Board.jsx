import Tile from "./Tile";

import './Board.css';
import { useState } from "react";

export default function Board({children = {} }) {
    // console.log('Board props', props) // props.children.puzzle, props.children.solution
    // console.log('Board children', children)
    const {puzzle = [], solution = []} = children
    console.log('puzzle', puzzle)
    console.log('solution', solution)

    const [currentBoard, setCurrentBoard] = useState(Array.from({length: 9}, (val, key)=>[]))
    const handleTileValueChange = (newNumber, rowIdx, colIdx) => {
        // TODO
        console.log('handleTileValueChange newNumber, rowIdx, colIdx', newNumber, rowIdx, colIdx)
        //currentBoard[rowIdx][colIdx] = newNumber
        setCurrentBoard( (prev)=>{
            const newBoard = prev.slice()
            newBoard[rowIdx][colIdx] = newNumber
            return newBoard
        } )
    }

    return <div className="board">
        {puzzle.map( (row, rowIdx)=><div className="row" key={rowIdx}>
            {row.map( (value, colIdx)=><Tile 
                key={colIdx} 
                value={value} 
                rowidx={rowIdx}
                colidx={colIdx}
                ontilevaluechange={handleTileValueChange}
                /> )}
        </div> )}       
    </div>
}