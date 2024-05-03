import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'
import './Barchartbox.scss'

type Props={
    title:string;
color:string;
    dataKey:string;
    chartData:object[];
}


const Barchartbox = (props:Props) => {
  return (
    <div className='barchartbox'>
        <h1>{props.title}</h1>
        <div className='chart'>
        <ResponsiveContainer width="99%" height={150}>
          
        <BarChart  data={props.chartData}>
        <Tooltip
           contentStyle={{background:"#2a3447",borderRadius:"5px"}}
           labelStyle={{display:"none"}}
           cursor={{fill:"none"}}
           ></Tooltip>
          <Bar dataKey={props.dataKey} fill={props.color} />
        </BarChart>
      </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Barchartbox