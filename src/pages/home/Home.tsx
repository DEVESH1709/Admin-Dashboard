

import Chartbox from '../../components/chartbox/Chartbox'
import { barChartBoxRevenue, barChartBoxVisit, chartBoxConversion, chartBoxProduct, chartBoxRevenue, chartBoxUser } from '../../data'
import Topbox from '../../topbox/Topbox'
import './Home.scss'
import Barchartbox from '../../components/barchartbox/Barchartbox'
import Piechartbox from '../../piechart/Piechartbox'
import BigchartBox from '../../components/bigchartbox/BigchartBox'

const Home = () => {
  return (
    <div className="home">

      <div className="box box1"><Topbox></Topbox></div>
      <div className="box box2"><Chartbox {...chartBoxUser}></Chartbox></div>
      <div className="box box3"><Chartbox {...chartBoxProduct}></Chartbox></div>
      <div className="box box4"><Piechartbox></Piechartbox></div>
      <div className="box box5"><Chartbox {...chartBoxRevenue}></Chartbox></div>
      <div className="box box6"><Chartbox {...chartBoxConversion}></Chartbox></div>
      <div className="box box7"><BigchartBox></BigchartBox></div>
      <div className="box box8"><Barchartbox {...barChartBoxRevenue}></Barchartbox></div>
      <div className="box box9"><Barchartbox {...barChartBoxVisit}></Barchartbox></div>

    </div>
  )
}

export default Home