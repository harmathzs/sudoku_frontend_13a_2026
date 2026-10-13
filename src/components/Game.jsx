import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Board from "./Board";

export default function Game() {
    const [gameData, setGameData] = useState({})

    const handleWin = ()=>{
        console.log('handleWin start')
        toast.success('You have won! :D ')
    }

    const getSudokuData = (difficulty) => {
        fetch(`/api/sudoku`)
        .then( async (json)=>{
            // console.log('json', json)
            const data = await json.json()
            // console.log('data', data)
            setGameData(data)
        } )
        .catch(console.warn)
        .finally( ()=>{} )
    }

    useEffect(()=>{
        // useEffect callback az NEM lehet async !!! 
        // TODO - base url?
        getSudokuData("medium")
    }, [])

    const handleSelectDifficulty = (e)=>{
        // console.log('handleSelectDifficulty e', e)
        const newDifficulty = e.target?.value
        getSudokuData(newDifficulty)
    }

    return <div>
        {/* gameData json: {JSON.stringify(gameData)}</p> */}
        <div>
            <label htmlFor="difficulty">Difficulty: </label>
            <select defaultValue="medium" name="difficulty" onChange={handleSelectDifficulty}>
                <option value="easy">easy</option>
                <option value="medium">medium</option>
                <option value="hard">hard</option>
            </select>
        </div>
        <Board onWin={handleWin}>{gameData}</Board>
        <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={true}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        {/*<button onClick={handleWin}>TODO toast now</button>*/}
    </div>
}