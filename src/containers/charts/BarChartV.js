import React, {Component} from 'react';
import {LineChart,XAxis,YAxis,CartesianGrid,Tooltip,Legend,Line,BarChart,Bar} from 'recharts';

const data = [
      {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
      {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
      {name: 'Page C', uv: 2000, pv: 8, amt: 2290},
      {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
      {name: 'Page E', uv: 18, pv: 5000, amt: 2181},
      {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
      {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
];

export default class BarChartV extends Component{
  render(){
    return (
      <div>
        <BarChart width={600} height={300} data={data}
          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
          <XAxis dataKey="name"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3"/>
          <Tooltip/>
          <Legend />
          <Bar dataKey="pv" fill="red" minPointSize={10}/>
          <Bar dataKey="uv" fill="yellow" minPointSize={10}/>
          <Bar dataKey="amt" fill="green" minPointSize={10}/>
        </BarChart>
      </div>
    )
  }
}
