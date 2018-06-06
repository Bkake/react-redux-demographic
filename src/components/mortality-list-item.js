import React from 'react'
import Flag from "./flag"
import ReactChartkick, { ColumnChart } from 'react-chartkick'
import Chart from 'chart.js'

ReactChartkick.addAdapter(Chart)
//window.Chart = require('chart.js')
const xTitle = "Age"
const yTitle = "% Mortalité"
const MortalityListItem = ({mortality}) => {
    const formatedMale = formatMortalityData(mortality.male);
    const formatedFemale = formatMortalityData(mortality.female);

    return(
        <tr>
            <td><Flag country={mortality.country} className="flag-medium"/></td>
            <td className="col-md-6"><ColumnChart data={formatedMale} xtitle={xTitle} ytitle={yTitle} max={30}/></td>
            <td className="col-md-6"><ColumnChart data={formatedFemale} xtitle={xTitle} ytitle={yTitle} max={30}/></td>
        </tr>
    )
}

const formatMortalityData = (mortality) => {
   const filterData = mortality.filter((data) => {
        return data.age <=101 ? false : data
   })
   const array = filterData.map((data) => {
      return [Number((data.age).toFixed(0)), Number((data.mortality_percent).toFixed(1))]
   })
   return array;
}

export default MortalityListItem;