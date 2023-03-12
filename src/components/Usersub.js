import React from 'react'
import { PieChart } from "react-minimal-pie-chart"
function Usersub(props) {
  return (
    <div className='data1' style={{height:'auto'}}>
        <h1>{props.element.title}</h1>
        <p className='datavalue'>{props.element.value}</p>
        { props.element.thereisgraph && (
        <div className='datashowing'>
            <div>
            {    props.element.collection.map((val)=>{
                return(
                <p className='collection'>{val.value} {val.title}</p>)
            }
            )}
        </div>
        <PieChart data = {props.element.collection} viewBoxSize = {[400, 400]}/>
        </div>)}
    </div>
  )
}

export default Usersub