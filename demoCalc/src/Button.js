import React from 'react';

const clickButton =(props)=>{
    return(
        <input type="button" value={props.label}/>
    );
}

export default clickButton;