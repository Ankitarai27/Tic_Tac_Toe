import React from 'react';
import Squares from './Squares';
const Boards=()=>{
    const[ state , setState ]=React.useState(Array(9).fill(null));
    const [xturn , setXturn ]=React.useState(true);
    const checkWinner=()=>{
        const lines=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ];
        for(let i=0;i<lines.length;i++){
            const[a,b,c]=lines[i];
            if(state[a] && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        }
        return null;
    };

    const winner=checkWinner();
    const handleClick=(index)=>{
        if(state[index]!==null){
            return;
        }
        if(winner){
            return;
        }
        const copyState=[...state];
        copyState[index]=xturn ? "X" : "O";
        setState(copyState);
        setXturn(!xturn);
    };
    const handleReset=()=>{
        setState(Array(9).fill(null));
    };
    return(
        <div className='board-container'>
            <div className='heading'>
            {
                winner ?(
                <div className='afterch'>
                    <h2>Winner is : {winner}</h2> 
                    <button className='Btn'  onClick={handleReset}>Play again</button>
                </div>)
                    : 
                <>    
                    <h2>Next Player is : {xturn ? "X" : "O"}</h2> 
                </>
            }
            </div>
            <div className='cont-box'>
                <div className='row-box'>
                    <Squares onClick={()=>handleClick(0)}  value={state[0]}/>
                    <Squares onClick={()=>handleClick(1)} value={state[1]}/>
                    <Squares onClick={()=>handleClick(2)} value={state[2]}/>
                </div>
                <div className='row-box'>
                    <Squares onClick={()=>handleClick(3)} value={state[3]}/>
                    <Squares onClick={()=>handleClick(4)} value={state[4]}/>
                    <Squares onClick={()=>handleClick(5)} value={state[5]}/>
                </div>
                <div className='row-box'>
                    <Squares onClick={()=>handleClick(6)} value={state[6]}/>
                    <Squares onClick={()=>handleClick(7)} value={state[7]}/>
                    <Squares onClick={()=>handleClick(8)} value={state[8]}/>
                </div>
            </div> 
        </div>
    );
};
export default Boards;