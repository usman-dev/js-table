import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
export default class News extends Component {

    constructor(props){
        super(props)
        this.state = {
            article:[],
            totalResults:1,
            loading: false,
            page:1
        }
    }


    async componentDidMount(){
        this.getData()
        console.log("this is componentDidMount")
    }

    componentDidUpdate(newProps) {
        if(newProps.category !== this.props.category) {
            this.getData();
            console.log("this is componentDidUpdate")
        }
    }

    getData = async() => {
        const url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=1&
        pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            article: parsedData.articles, 
            totalResults: parsedData.totalResults,
            loading: false
        })
        console.log("this is getData")
    }

    handleNext = async ()=>{
/**         if (this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{ */
        let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=
        ${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            article: parsedData.articles,
            loading: false
        })
        console.log("this is handleNext")
 //   }
        // this.setState({page: this.state.page + 1});
    }

    handlePrev = async()=>{
        let url = `https://newsapi.org/v2/top-headlines?language=en&category=${this.props.category}&apiKey=9ba4796f37b1465bb15222ed537beeb3&page=
        ${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            article: parsedData.articles,
            loading: false
        })
        console.log("this is handlePrev")
    }

    render() {
        console.log("This is render")
        const { article, loading, page, totalResults } = this.state;
        return (
            <div className="container my-4">
                <h1 className="text-center" style={{margin: '40px 0px'}}>NewsBuzz - Top {this.props.category} highlights!</h1>
                {loading && <Spinner/>}
                <div className="row">
                    {!loading && article && article.length > 0? article.map((par)=>{
                        return <div className="col-md-4" key={par.url}>
                                    <NewsItem title={par.title} description={par.description}
                                    author={par.author? par.author:"Unknown"} date={par.publishedAt}
                                    source={par.source.name}
                                    imageUrl={par.urlToImage} newsUrl={par.url}/>
                                </div>
                    }):loading}   
                </div> 
                <div className="container d-flex justify-content-between">
                <button disabled={page<=1} type="button" className="btn btn-primary btn-lg" onClick={this.handlePrev}>&larr; Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults/20)} type="button" className="btn btn-primary btn-lg" onClick={this.handleNext}>Next &rarr;</button>
                </div>          
            </div>
        )
        
    }
}