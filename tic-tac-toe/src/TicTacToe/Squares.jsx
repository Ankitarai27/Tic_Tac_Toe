import React from "react";
const Squares = (props)=>{
    return(
        <div className="square"
            onClick={props.onClick} 
            style={{
                border:'1px solid aqua',
                width:'100px',
                height:'100px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'rgb(67, 137, 159)'}}>
            <h1>{props.value}</h1>
        </div>
    );
};
export default Squares;