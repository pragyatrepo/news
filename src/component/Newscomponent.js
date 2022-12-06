import React, { Component } from 'react'

export class Newscomponent extends Component {
  render() {
    let{title,description,Imageurl,Newsurl}=this.props;
    return (
      <div>
        <div className="card bg-light"  >
                    <img src={Imageurl} className="card-img-top" alt="Not available"style={{height:"13rem"}} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={Newsurl} target="_blank" className="btn btn-sm btn-primary">Read more</a>
                    </div>
                </div>
      </div>
    )
  }
}

export default Newscomponent