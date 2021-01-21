import React from 'react'
import OutPutScreenRow from './OutputScreenRow'

const outputScreen=(props)=>{
   return(
       <div className="screen">
           <OutPutScreenRow value={props.value.question}/>
           <OutPutScreenRow value={props.value.answer}/>
       </div>
   );
}

export default outputScreen;