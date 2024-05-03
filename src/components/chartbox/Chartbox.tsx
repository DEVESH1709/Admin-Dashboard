import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts'
import './chartbox.scss'
// import {chartBoxUser} from '../data.ts'
import { Link } from 'react-router-dom';
type Props ={
  color:string;
  icon:string;
  title:string;
  dataKey:string;
  number:number|string;
  percentage:number;
  chartData:object[]
}
const Chartbox = (props:Props) => {
  return (
    <div className='chartbox'>
  <div className='boxinfo'>
    <div className='title'>
    <img src={props.icon}></img>
    <span>{props.title}</span>
    </div>
    <h1>{props.number}</h1>
  <Link to="/" style={{color:props.color}}>View All</Link>
  </div>
  
      <div className='chartinfo'>
        <div className='chart'>
        <ResponsiveContainer width="99%" height="100%">
        <LineChart data={props.chartData}>
        <Tooltip
        contentStyle={{background:"transparent",border:"none"}}
        labelStyle={{display:"none"}}
        position={{x:10,y:60}}
        ></Tooltip>
          <Line type="monotone" dataKey={props.dataKey} stroke={props.color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
        </div>
        <div className='texts'>
          <span className='percentage' style={{color:props.percentage<0? "tomato":"limegreen"}}>{props.percentage}%</span>
          <span className='duration'>this month</span>
        </div>
        
      </div>
    </div>
  )
}

export default Chartbox