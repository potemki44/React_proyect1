import React from 'react'


export const QuoteBox = ({userRandom,colorRandom,Cliking}) => {


  const styleButton={ backgroundColor: colorRandom}


  return (
    <div className='QuoteBox' style={{color:colorRandom}}>

       <h2>{userRandom.author}</h2> 
      
       <span style={{color:colorRandom}}>{userRandom.quote}
       <button onClick={Cliking}  style={styleButton} className='btn' >&#62;</button>
       </span>


     
           </div>
      
  )
}
