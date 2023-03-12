import './App.css';
import React, { useState } from 'react'
import Simplification from './components/Simplification';
import Usersub from './components/Usersub';

import{
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
import {Bar} from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
const data4= [
  {
      "id":"0",
      "companytitle":"Tesla",
      "value":"$5.4m",
      "thereisimg": false,
      "thereismingraph":true,
  },
  {
      "id":"1",
      "companytitle":"McDonald’s",
      "value":"$2.3m",
      "thereisimg": false,
      "thereismingraph":true,
  },
  {
      "id":"2",
      "companytitle":"AARP ",
      "value":"$800k",
      "thereisimg": false,
      "thereismingraph":true,
  },
  {
      "id":"3",
      "companytitle":"Prime Theraputics",
      "value":"$200k",
      "thereisimg": false,
      "thereismingraph":true,
  },
  {
      "id":"4",
      "companytitle":"Disney",
      "value":"$100k",
      "thereisimg": false,
      "thereismingraph":true,
  },
  {
      "id":"5",
      "companytitle":"GM",
      "value":"$16k",
      "thereisimg": false,
      "thereismingraph":true,
  }
] 
const data3= [
  {
      "id":"0",
      "companytitle":"Tesla",
      "value":"$5.4m",
      "thereisimg": true,
      "img":"./allo.jpeg"
  },
  {
      "id":"1",
      "companytitle":"McDonald’s",
      "value":"$2.3m",
      "thereisimg": true,
      "img":"./allo.jpeg"
  },
  {
      "id":"2",
      "companytitle":"AARP ",
      "value":"$800k",
      "thereisimg": true,
      "img":"./allo.jpeg"
  },
  {
      "id":"3",
      "companytitle":"Prime Theraputics",
      "value":"$200k",
      "thereisimg": true,
      "img":"./allo.jpeg"
  },
  {
      "id":"4",
      "companytitle":"Disney",
      "value":"$100k",
      "thereisimg": true,
      "img":"./allo.jpeg"
  },
  {
      "id":"5",
      "companytitle":"GM",
      "value":"$16k",
      "thereisimg": true,
      "img":"./allo.jpeg"
  }
] 
const data2= [
  {
      "id":"0",
      "companytitle":"Tesla",
      "value":"$5.4m",
      "thereisimg": false,
  },
  {
      "id":"1",
      "companytitle":"McDonald’s",
      "value":"$2.3m",
      "thereisimg": false,
  },
  {
      "id":"2",
      "companytitle":"AARP ",
      "value":"$800k",
      "thereisimg": false,
  },
  {
      "id":"3",
      "companytitle":"Prime Theraputics",
      "value":"$200k",
      "thereisimg": false,
  },
  {
      "id":"4",
      "companytitle":"Disney",
      "value":"$100k",
      "thereisimg": false,
  },
  {
      "id":"5",
      "companytitle":"GM",
      "value":"$16k",
      "thereisimg": false,
  }
] 
const data1= [
  {
      "id":"0",
      "title":"Revenue",
      "value":"$2.5B",
      "thereisgraph": false,
  },
  {
      "id":"1",
      "title":"MMR",
      "value":"$3,500",
      "thereisgraph": false,
  },
  {
      "id":"2",
      "title":"CLV",
      "value":"$2.387",
      "thereisgraph": false,
  },
  {
      "id":"3",
      "title":"ARPU",
      "value":"$50m",
      "thereisgraph": false,
  },
  {
      "id":"4",
      "title":"TTV",
      "value":"7 Days",
      "thereisgraph": false,
  },
  {
      "id":"5",
      "title":"PQLs",
      "value":"850",
      "thereisgraph": false,
  }
] 
const data = [
  {
      "id":"0",
      "title" :"Users",
      "value" :"4,209",
      "thereisgraph": true,
      "collection":[
      {
          title: "new",
          value:62,
          color:"black"    
      },
      {
          title: "returning",
          value:62,
          color:"blue"    
      },
      {
          title: "inactive",
          value:62,
          color:"grey"    
      }]
  },
  {
      "id":"1",
      "title" :"Subscriptions",
      "value" :"1,302",
      "thereisgraph": true,
      "collection":[
      {
          title: "paid",
          value:100,
          color:"blue"  
      },
      {
          title: "trial",
          value:60,
          color:"grey"  
      },]
  }
]
const chart1data = {
  labels :['JAN', 'FEB','MAR', 'APR', 'MAY','JUN', 'JUL', 'AUG','SEP', 'OCT','NOV','DEC'],
  datasets:[
      {
          label: 'Overall User Acquisition',
          data : [100, 150,150,250,300,200,250,100,300,350, 350,400],
          backgroundColor:'blue',
          borderWidth:'1',
      }
  ]
}
const chart2data = {
labels :['JAN', 'FEB','MAR', 'APR', 'MAY','JUN', 'JUL', 'AUG','SEP', 'OCT','NOV','DEC'],
datasets:[
    {
        label: 'Overall User Activity',
        data : [100, 150,150,250,300,200,250,100,300,350, 350,400],
        backgroundColor:'blue',
        borderWidth:'1',
    }
]
}
const options = {

}
function App() {

  return (
    <div className="App">
      <div className='navbar'></div>
      <div className='home'>
        <div className='firstpart'>
          <div className='data0'>
          {
               data.map((element, index)=>{
                return(
                <Usersub element={element}/>
               )})
          }
          </div>
          <div className='dat1'>
           {
            data1.map((element) =>{
              return(
                <Usersub element={element}/>
             ) })
           }
          </div>
        </div>
        <div className='secondpart'>
        <div className='bar1'>
            <Bar style={{padding:'20px'}}
            data = {chart1data} options = {options}></Bar>
          </div>
          <div className='bar1'>
            <Bar style={{padding:'20px'}}
            data = {chart2data} options = {options}></Bar>
          </div>
        </div>
        <div className='thirdpart'>
           <div style={{width:'40%'}}>
            <Simplification text="Top Revenue Generators"  data2={data3} left={true}/>
           </div>
           <div style={{width:'40%', display:'flex', flexDirection:'row'}}>
            <Simplification text="Admin activity"  data2={data2}/ >
            <Simplification text="Learner actvity"  data2={data2}/>
            </div>
        </div>
        <div className='fourthpart'>
            <Simplification text=""  data2={data4} />
            <Simplification text=""  data2={data2} />
        </div>
      </div>
    </div>
  );
}

export default App;
