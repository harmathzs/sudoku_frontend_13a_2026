import Tile from "./Tile";

import { useState } from "react";

import './Board.css';

export default function Board({children = {}, onWin }) {
    // console.log('Board props', props) // props.children.puzzle, props.children.solution
    // console.log('Board children', children)
    const {puzzle = [], solution = []} = children
    console.log('puzzle', puzzle)
    console.log('solution', solution)

    const [currentBoard, setCurrentBoard] = useState(Array.from({length: 9}, (val, key)=>[]))  

    const checkWin = (board)=>{
        console.log('board', board)

        let numbersDiff = false;
        let matches = 0
        // "Merge" board with puzzle, check with solution
        board.forEach( (boardRow, rowIdx) => {
            boardRow.forEach( (boardCellValue, colIdx) => {
                if (boardCellValue == solution[rowIdx][colIdx]) {
                    // még mindig marad false
                    matches++;
                } else {
                    numbersDiff = true;
                }
            } )
        } )
        console.log('matches', matches)

        let puzzleNulls = 0
        puzzle.forEach( (puzzleRow, rowIdx) => {
            puzzleRow.forEach( (puzzleCellValue, colIdx) => {
                if (!puzzleCellValue) puzzleNulls++;
            } )
        } )
        console.log('puzzleNulls', puzzleNulls)

        if (!numbersDiff && matches == puzzleNulls) {
            console.log('Gamer has won! :D ')
            onWin()
        }
    }

    const handleTileValueChange = (newNumber, rowIdx, colIdx) => {
        // TODO
        console.log('handleTileValueChange newNumber, rowIdx, colIdx', newNumber, rowIdx, colIdx)
        //currentBoard[rowIdx][colIdx] = newNumber
        setCurrentBoard( (prev)=>{
            const newBoard = prev.slice()
            newBoard[rowIdx][colIdx] = newNumber
            checkWin(newBoard)
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