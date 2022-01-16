import { useState } from "react";
import "../App.css"
import {XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer ,BarChart, Bar } from 'recharts';
import { Img } from "./InfoSection/InfoSectionElements";


function MyChart(img,alt) {
  const [soft1, setSoft1] = useState(10)
  const [soft2, setSoft2] = useState(22)
  const [soft3, setSoft3] = useState(33)
  const [soft4, setSoft4] = useState(45)
  const [soft5, setSoft5] = useState(67)
  const [soft6, setSoft6] = useState(56)
  const pdata = [
    {
      name: 'SoftWare1',
    
      Units: soft1
    },
    {
      name: 'SoftWare2',
    
      Units: soft2
    },
    {
      name: 'SoftWare3',
  
      Units:soft3
    },
    {
      name: 'SoftWare4',
    
      Units: soft4
    },
    {
      name: 'SoftWare5',
      student: 9,
      Units: soft5
    },
    {
      name: 'SoftWare6',
    
      Units: soft6
    },
  ]
  const salesTracker = (e)=> {
  if(e.target.value==="2020"){
      setSoft1(17);
      setSoft2(27);
      setSoft3(23);
      setSoft4(24);
      setSoft5(45);
      setSoft6(26);
      console.log(e.target.value)
    }
    if(e.target.value==="2019"){
      setSoft1(10);
      setSoft2(22);
      setSoft3(33);
      setSoft4(45);
      setSoft5(56);
      setSoft6(67);
      console.log(e.target.value)
    }
    if(e.target.value==="2021"){
      setSoft1(100);
      setSoft2(90);
      setSoft3(48);
      setSoft4(85);
      setSoft5(28);
      setSoft6(76);
      console.log(e.target.value)
    }
    if(e.target.value==="2022"){
      setSoft1(40);
      setSoft2(82);
      setSoft3(73);
      setSoft4(85);
      setSoft5(56);
      setSoft6(77);
      console.log(e.target.value)
    }
    
  }
  return (
    
    
    <>
     
      <h1 className="chart-heading">Our Sales</h1>
      <div className="selectBox">
            <select id="sales" onChange={salesTracker}>

                <option value="2019">2019</option>
               
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
            </select>
        </div>
        

      <ResponsiveContainer id="Chart" width="80%" aspect={3}>
        <BarChart 
          width={500}
          height={300}
          data={pdata}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
          >
           <Img src={img} alt={alt}/>
          

          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" id="xaxis" />
          <YAxis id="yaxis" />
          <Tooltip />
          <Legend fill="#fff"/>
          {/* <Bar dataKey="student" fill="#8884d8" /> */}
          <Bar dataKey="Units" fill="#82ca9d"/>
        </BarChart>
      </ResponsiveContainer>

      

    </>
  );
}
export default MyChart;