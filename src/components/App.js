import React, { Component } from 'react';
import '../App.css';
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
          <h1>{post.title}</h1>
          <hr className="hrPosts"/>
          <p>{renderHTML(post.body)}</p>
        </div>
      </div>
      )
    }); 
  }

  render() {
    // const date = new Date();
    // const months = [1,2,3,4,5,6,7,8,9,10,11,12];
    // const dateTime = date.getDate() +'/'+months[date.getMonth()] + '/'+ date.getFullYear()+"  "+date.getHours()+':'+date.getMinutes();
    // console.log(dateTime);
    return (
      <div className="container">
        <Form />
        {this.renderPost()}
      </div>
    );
  }
}

export default App;