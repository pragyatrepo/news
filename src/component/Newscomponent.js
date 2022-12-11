import React, { Component } from 'react'

export class Newscomponent extends Component {
  render() {
    let{title,description,Imageurl,Newsurl,author,time}=this.props;
    
    return (
      <div>
        <div className="card bg-light mx-4" style={{height:"30rem"}}>
                    <img src={Imageurl} className="card-img-top" alt="Not available"style={{height:"13rem"}} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        
                        <p style={{fontSize:"0.7rem"}}><strong>By</strong> {author}</p>
                        <p style={{fontSize:"0.7rem"}}><strong>Updated At :- </strong>{new Date(time).toLocaleString()}( {Math.floor(((new Date().getTime()-new Date(time).getTime())/1000)/60)} min ago)</p>
                        <a href={Newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
      </div>
    )
  }
}

export default Newscomponent