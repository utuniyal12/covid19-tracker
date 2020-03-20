import React from 'react'
import TotalInfected from './TotalInfected'
import TotalDeaths from './TotalDeaths'
import TotalRecovered from './TotalRecovered'
import '../styles/landing.css'
const csv=require('csvtojson')



class Counter extends React.Component{

    state={
        infected:[{count:0}],
        deaths:[{count:0}],
        recovered:[{count:0}]
    }

    componentDidMount(){
        Promise.all([
        fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_19-covid-Confirmed.csv",{
            mode:'cors',
            headers:{
                "Content-type": "text/plain; charset=utf-8"
            }
        })
        .then(res=>res.text())
        .then(res=>{
            csv().fromString(res)
            .then(obj=>{
                this.setState({infected:obj})
            })
        }),
        fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/archived_data/archived_time_series/time_series_2019-ncov-Deaths.csv",{
            mode:'cors',
            headers:{
                "Content-type": "text/plain; charset=utf-8"
            }
        })
        .then(res=>res.text())
        .then(res=>{
            csv().fromString(res)
            .then(obj=>{
                this.setState({deaths:obj})
            })
        }),
        fetch("https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/archived_data/archived_time_series/time_series_2019-ncov-Recovered.csv",{
            mode:'cors',
            headers:{
                "Content-type": "text/plain; charset=utf-8"
            }
        })
        .then(res=>res.text())
        .then(res=>{
            csv().fromString(res)
            .then(obj=>{    
                this.setState({recovered:obj})
            })
        })
        ])
    }

    render(){
        return(
        <div className="all-counts">
            <TotalInfected value={this.state.infected}/>
            <TotalDeaths value={this.state.deaths}/>
            <TotalRecovered value={this.state.recovered}/>
        </div>
        )
    }
}

export default Counter