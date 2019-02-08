import React, { Component } from 'react';
import '../App.css';
import { database } from '../firebase';
// import _ from 'lodash';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import Form from './Form';
// import Navbar from './Navbar';

class App extends Form {

    //render post from firebase 
  renderPost() {
    return this.state.posts.map((post, index) => {
      return (
      <div key={index} className="post-container">
        <div className="posts">
          <h2>{post.title}</h2>
          <hr className="hrPosts"/>
          <p>{renderHTML(post.body)}</p>
        </div>
      </div>
      )
    }); 
  }

  render() {
    return (
      <div className="container">
      
        {this.renderPost()}
      </div>
    );
  }
}

export default App;