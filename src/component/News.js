import React, { Component } from 'react'
import Loading from './loading';
import Newscomponent from './Newscomponent'
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps={
        country:'in',
        pagesize:8,
        category:'general'
    }
    static propTypes={
        country:PropTypes.string,
        pagesize:PropTypes.number,
        category:PropTypes.string
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            pagenumber: 1
        }
    }
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e0b6e5ecdcff447aa3af7d9f2d83fbb7&page=1&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles,
            total:parseddata.totalResults,
        loading:false })
    }
    Handlenext= async()=>{                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
        
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=e0b6e5ecdcff447aa3af7d9f2d83fbb7&page=${this.state.pagenumber+1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url)
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles ,
            pagenumber:this.state.pagenumber+1,
            loading:false
        })
    }
    Handleprev= async()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=e0b6e5ecdcff447aa3af7d9f2d83fbb7&page=${this.state.pagenumber-1}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data = await fetch(url)
        
        let parseddata = await data.json()
        this.setState({ articles: parseddata.articles ,
            pagenumber:this.state.pagenumber-1,
            loading:false})
    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2 className='text-center'>News Feed</h2>
                    {this.state.loading &&<Loading/>}
                    <div className="row" >
                        {!this.state.loading && this.state.articles.map((element) => {
                            return <div className="col-md-4 my-2" key={element.url} >
                            <Newscomponent title={element.slice?element.title.slice(0,45):""} description={element.description?element.description.slice(0,80):''} Imageurl={element.urlToImage} Newsurl={element.url} />
                        </div>
                        

                        })}
                        <div className="d-flex justify-content-between">
                        <button disabled={this.state.pagenumber<=1} type="button" className="btn btn-dark" onClick={this.Handleprev}>&larr; Previous</button>
                        <button disabled={(this.state.pagenumber+1>Math.ceil(this.state.total/12))}type="button" className="btn btn-dark" onClick={this.Handlenext}>Next &rarr;</button>

                        </div>

                    </div>
                </div>

            </div>
        )
    }
}

export default News
