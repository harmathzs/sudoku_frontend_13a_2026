import { useEffect, useState } from "react";
import Board from "./Board";

export default function Game() {
    const [gameData, setGameData] = useState({})

    const handleWin = ()=>{
        console.log('handleWin start')
    }

    useEffect(()=>{
        // useEffect callback az NEM lehet async !!! 
        // TODO - base url?
        fetch(`http://localhost:8080/sudoku`)
        .then( async (json)=>{
            // console.log('json', json)
            const data = await json.json()
            console.log('data', data)
            setGameData(data)
        } )
        .catch(console.warn)
        .finally( ()=>{} )
    }, [])

    return <div>
        {/* gameData json: {JSON.stringify(gameData)}</p> */}
        <Board onWin={handleWin}>{gameData}</Board>
    </div>
}