import axios from 'axios';
import './App.css';

import React, { Component } from 'react'

export default class App extends Component {

   state = {
    postList: []
   }

   componentDidMount(){
                axios.get("https://dummyjson.com/quotes")
                .then((response)=>{
                  console.log(response.data.quotes);
                  this.setState({
                    postList:response.data.quotes
                  })
                })
                .catch((error)=>{
                  console.log(error)
                })
   }
  render() {
    return (
      <>
        <h1>Fetching the data from API</h1>
     
        <>
        <table border={1}>
          <tr className='head-row'>
            <th>Sno.</th>
            <th>Quote</th>
            <th>Author</th>
          </tr>
          {this.state.postList.map((item)=>(
          <tr className='data-row'>
            <td className='first-col'>{item.id}</td>
            <td className='second-col'>{item.quote}</td>
            <td className='third-col'>{item.author}</td>
          </tr>
      ))}

        </table>
        {/* <div key={item.id} >
          <h3 style={{color:"red", display:"flex", flexDirection:"row"}}>{item.title}</h3>
          <p>{item.body}</p>
        </div> */}
        </>
      </>
    )
  }
}
