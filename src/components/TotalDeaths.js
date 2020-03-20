import React from 'react'
import '../styles/landing.css'
import CountUp from 'react-countup'

function TotalDeaths(props){

    let rows=Object.keys(props.value[0]).length
    let cols=props.value.length
    let total=0
    let latestDate=Object.keys(props.value[0])[rows-1]
    for(let i=0;i<cols;i++){
        total+=Number(props.value[i][latestDate])   
    }
    return(<div className="total-count">
        <CountUp className="count"
            end={total}
            duration={3}
        />
        <p>Deaths</p>
    </div>)
}

export default TotalDeaths