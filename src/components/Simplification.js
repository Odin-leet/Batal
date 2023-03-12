import React from 'react'
import styledComponents from 'styled-components';
function Simplification(props) {
  return (
    <div style ={{marginLeft:"5%",width:'30%',position:'relative'}}>
    <h1 style={{fontSize:"10px"}}>{props.text} </h1>
     {
       props.data2.map((element)=>{
         return(
           <div className='companies'>
            {element.thereisimg &&(
            <img width={'20px'} height={'20px'} url={element.img}/>)
            }
            <p style={{fontSize:"x-small"}}>{element.companytitle}</p>
            <p className='companyvalue'>{element.value}</p>
            {element.thereismingraph &&(
               <img  url={element.img} style={{marginLeft:"80%"}} width={'20px'} height={'20px'} />)
            }
           </div>
         )
       })
     }
     </div>
  )
}

export default Simplification