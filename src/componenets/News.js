import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    constructor(){
        super()
        this.state = {
            articles: [],
            loading: false,
            page:1
        }
    }

    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=1&pageSize=
        ${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })

    }

    handleNext = async()=>{
/**         if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{ */
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=
        ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles,
            loading: false
        })
 //   }
    }

    handlePrev = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=technology&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=
        ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }

    render() {
        return (
            <div className="container my-4">
                <h1 className="text-center">News Buzz - Top Technology Updates!</h1>
                {this.state.loading && <Spinner/>}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4" key={element.url}>
                        <NewsItem title={element.title} description={element.description}
                        imageUrl={element.urlToImage? element.urlToImage:"https://cdn.wccftech.com/wp-content/uploads/2021/12/xcyDFMVt7v9FzyMgCUa8e4-1024-80.jpg.webp"} newsUrl={element.url}/>
                    </div>
                    })}   
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-primary btn-lg" onClick={this.handlePrev}>&larr; Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/20)} type="button" className="btn btn-primary btn-lg" onClick={this.handleNext}>Next &rarr;</button>
                </div>          
            </div>
        )
    }
}