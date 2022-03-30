import React, { Component } from 'react'
import Navbar from './Navbar'
export default class Home extends Component {
  render() {
    return (
      <>
<Navbar/> 
      
      <div className='row'>
      <div className="container">
        <div class="card col-md-6 pt-6 offset-md-3 card-border-primary shadow p-1 mb-1 bg-white rounded">
          <h5 class="card-header">Welcome</h5>

          <div class="card-body">
            <h5 class="card-title">Question Bank</h5>
            <p> Here you can add Questions.</p>
          </div>
          
          <a class="btn btn-outline-primary" href="/" role="button">HERE</a>

        </div>

      </div>  
      <div className="container">
        <div class="card col-md-6 pt-6 offset-md-3 card-border-primary shadow p-2 mb-2 bg-white rounded">
          <h5 class="card-header">FILE UPLOADER</h5>

          <div class="card-body">
            <h5 class="card-title"></h5>
            <p> Here you can add Assignment for Students.</p>
          </div>
          
          <a class="btn btn-outline-primary" href="/file" role="button">HERE</a>

        </div>

      </div>  
      </div>
      </>
    )
  }
}
