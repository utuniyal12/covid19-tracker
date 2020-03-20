import React from 'react'
import '../styles/landing.css'
import { render } from '@testing-library/react'

class News extends React.Component{

    state={
        index:0,    
        array:[{tile:"loading..."}],
        headline:""
    }

    componentDidMount(){
        let date=new Date();
        date=date.toISOString().substring(0,10)
        var url = 'http://newsapi.org/v2/everything?' +
          'q=coronavirus&'+
          `from=${date}&`+
          'sortBy=popularity&' +
          'apiKey=e70fe961c44f420daeeea626002df511';

        var req = new Request(url);

        fetch(req)
        .then(res=>res.json())
        .then(res=>{
            console.log(res.articles)
            this.setState({
                // headline:res.articles[this.state.index].title
                array:res.articles
            })
        })
    }

    prevHeadline=()=>{
        this.setState({
            index:this.state.index>=1?this.state.index-1:19
        })
    }

    nextHeadline=()=>{
        this.setState({
            index:(this.state.index+1)%20
        })
    }

    render(){
        return(
            <div className="news">
                <button className="prev btn" onClick={this.prevHeadline}>{'<'}</button>
                <button className="next btn" onClick={this.nextHeadline}>{'>'}</button>
                {this.state.array[this.state.index].title}
            </div>
        )
    } 
}

export default News