import React, { Component } from 'react';
import './Tag.css';

class Tag extends Component{
    state = {
        filterIndex: null,
    }

    origin = () => {    
        const countOrigin = (countryName) => {
            const count = this.props.data.filter((country) => (
                country?.origin === countryName
            ))
            return count.length
        }
             
        const uniqueOrigin = this.props.data.map((country) => {
            return country?.origin
        }).filter((value, index, self) => (
            self.indexOf(value) === index
        ))
        
        return(
            uniqueOrigin.map((origin, i) => (
                <button key={i} value={origin} onClick={(e) => {this.props.handleOrigin(e, origin)}} >{origin}{` (${countOrigin(origin)})`}</button>
            ))
        )
    }

    render(){
        return(
            <div className="tag">
                <div className="tag_heading">
                    <h3>Origin</h3>
                </div>
                <div className="tag_list">
                    <button onClick={this.props.handleChangeState}>All (67)</button>
                    {
                        this.origin()
                    }
                </div>
            </div>
        )
    }
}

export default Tag;
