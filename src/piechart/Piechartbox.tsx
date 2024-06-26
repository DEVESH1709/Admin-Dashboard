import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import './Piechartbox.scss'
const data = [
    { name: "Mobile", value: 400, color: "#0088FE" },
    { name: "Desktop", value: 300, color: "#00C49F" },
    { name: "Laptop", value: 300, color: "#FFBB28" },
    { name: "Tablet", value: 200, color: "#FF8042" },
  ];
const Piechartbox = () => {
  return (
    <div className="piechartbox">

        <h1>Leads by Source</h1>
        <div className="chart">
            <ResponsiveContainer width="99%" height={300}>
            
            <PieChart >
                <Tooltip
                contentStyle={{background:"white",borderRadius:"5px"}}
                ></Tooltip>
        <Pie
          data={data}
         
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((item) => (
            <Cell key={item.name} fill={item.color} />
          ))}
        </Pie>
       
      </PieChart>
            </ResponsiveContainer>
        </div>

        <div className="options">
            {data.map((item)=>(
                <div className="option" key={item.name}>
                    <div className="title">
                        <div className="dot" style={{"backgroundColor": item.color }}></div>
                        <span>{item.name}</span>
                    </div>
                    <span>{item.value}</span>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Piechartbox;