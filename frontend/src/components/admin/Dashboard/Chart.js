import React from 'react'
import {Chart as ChartJS ,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,ArcElement,Legend} from "chart.js"
import {Line,Doughnut} from "react-chartjs-2"


ChartJS.register(
    CategoryScale,
    LinearScale,PointElement,
    LineElement,Title,
    Tooltip,ArcElement,Legend  
)


export const LineChart = ({views=[]}) => {

  const labels=getLastYearMonths();
  const options={
     responsive:true,
     plugins:{
         legend:{
            position:'bottom'
         },
         title:{
            display:true,
            text:'Yearly views'
         }
     }
  }

  const data = {
     labels,
     datasets:[
          {
            label:"Views",
            data:[12,36],
            borderColor:'teal',
            backgroundColor:"#fff"
          }
     ]
  }

  return (
     <Line options={options} data={data}/>
  )
}


export const DoughnutChart =({users=[]})=>{
 
     const data = {
        labels:['Subscribed','Not Subscribed'],
        datasets:[
             {
               label:"Views",
               data:[13,10],
               borderColor:'teal',
               backgroundColor:['teal','white'],
               borderWidth:1
             }
        ]
     }

     return (
        <Doughnut  data={data}/> 
     )
}


function getLastYearMonths(){
    
    const labels=[];
    const months=[
         "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ]

  const currentMonth = new Date().getMonth();
  const remain = 11-currentMonth;

  for(let i=currentMonth;i<months.length;i--){
       const element = months[i];
       labels.unshift(element);
       if(i===0)
        break;
  }

  
  for(let i=11;i>remain;i--){
      if(i===currentMonth) break;
      const element = months[i];
      labels.unshift(element);
     
  }

  return labels;

}



