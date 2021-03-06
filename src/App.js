import React, { Component } from 'react';
import './App.css';
import Body from './Body';
import Tag from './Tag';
import axios from 'axios';

class App extends Component{
  state = {
    data: [],
    origin: null,
  }

  componentDidMount(){
    this.catData();
  }

  catData = async () => {
      const url = 'https://api.thecatapi.com/v1/breeds'
      try{
          const response = await axios.get(url);
          const catdata = await response.data;
          this.setState({
              data: catdata,
          })
          console.log('Array is: ')
          console.log(this.state.data)
      } catch(error){
          console.log(error)
      }
  }
  
  handleOrigin = (e) => (
    this.setState({
      origin: e.target.value,
    })
  )

  handleChangeState = () => (
    this.setState({
      origin: null,      
    })
  )

  render(){
    console.log(this.state.origin)
    let filteredOrigin = this.state.data.filter((cat) => {
      return cat.origin === this.state.origin
    })

    return(
      <div className="app">
        <h1>Cat Paradise</h1>
        <div className="app_Divider">
          <Body data={ this.state.origin === null ? this.state.data : filteredOrigin } />
          <Tag data={ this.state.data } handleOrigin={ this.handleOrigin } handleChangeState={ this.handleChangeState } /> 
        </div>
      </div>
    )
  }
}

export default App;
