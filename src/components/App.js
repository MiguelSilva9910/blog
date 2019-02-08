import React, { Component } from 'react';
import '../App.css';
import { database } from '../firebase';
// import _ from 'lodash';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import renderHTML from 'react-render-html';
import Form from './Form.js'

class App extends Component {

  render() {
    return (
      <div className="container">
        <Form />
      </div>
    );
  }
}
export default App;