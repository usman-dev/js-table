import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class News extends Component {

    constructor(){
        super()
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9ba4796f37b1465bb15222ed537beeb3"
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({articles: parsedData.articles})

    }
//
    render() {
        return (
            <div className="container my-4">
                <h2>News Buzz - Top Technology Updates!</h2>
                <div className="row">
                    {this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description}
                        imageUrl={element.urlToImage? element.urlToImage:"https://cdn.wccftech.com/wp-content/uploads/2021/12/xcyDFMVt7v9FzyMgCUa8e4-1024-80.jpg.webp"} newsUrl={element.url}/>
                    </div>
                    })}
                    
                </div>           
            </div>
        )
    }
}