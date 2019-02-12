import React, { Component } from 'react';
import '../App.css';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import Form from './Form';
import Navbar from './Navbar';

class App extends Form {

//render post from firebase 
  renderPost() {
    return this.state.posts.map((post, index) => {
      return (
      <div key={index} className="post-container">
        <div className="posts">
          <h1>{post.title}</h1>
          <hr className="hrPosts"/>
          <p>{renderHTML(post.body)}</p>
          <hr className="hrdate" />
            <p className="date">{renderHTML(post.date)}</p>
        </div>
      </div>
      )
    }); 
  }


  render() {
    return (
      <div>
         <Navbar />
        <div className="container">
          <Form />
          {this.renderPost()}
        </div>
      </div>
    );
  }
}

export default App;