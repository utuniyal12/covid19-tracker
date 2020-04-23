import React from 'react'
import '../styles/landing.css'
import CountUp from 'react-countup'



class Counter extends React.Component{

    state={
        infected:0,
        deaths:0,
        recovered:0
    }

    componentDidMount(){
        fetch("https://covid19.mathdro.id/api")
        .then(res=>res.json())
        .then(res=>
            this.setState({infected:res["confirmed"]["value"],
            deaths:res["deaths"]["value"],
            recovered:res["recovered"]["value"]
        }))
    }

    render(){
        return(
        <div className="all-counts">
            <div className="counter">
                <p>Total Infected</p>
            <CountUp
                end={this.state.infected}
                duration={5}    
            />
            </div>
            <div className="counter">
                <p>Total Recovered</p>
            <CountUp
                end={this.state.recovered}
                duration={5}
            />
            </div>
            <div className="counter">
                <p>Total Deaths</p>
            <CountUp
                end={this.state.deaths}
                duration={5}
            />
            </div>
        </div>
        )
    }
}

export default Counter