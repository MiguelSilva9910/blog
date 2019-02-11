import React, { Component } from 'react';
import '../App.css';
import { database } from '../firebase';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default class Form extends Component {

  constructor(props) {
    super(props);
    this.onBodyChange = this.onBodyChange.bind(this);
    this.onHandleSubmit = this.onHandleSubmit.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);

    this.state = {
      isSubmitionAllowed: false,
      isTitleEmpty: true,
      isBodyEmpty: true,
      title: '',
      body: '',
      data: '',
      posts: []
    };
  }

  //lifecycle method
  componentDidMount() {
    database.on('value', snapshot => {
      this.setState({
        posts: Object.entries(snapshot.val())
          .reduce((accumulator, obj) => ([...accumulator, obj[1]]), [])
          .reverse()
      });
    });
  }

  onHandleSubmit(e) {
    const date = new Date();
    const months = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const currentDate = date.getDate() + '/' + months[date.getMonth()] + '/' + date.getFullYear();    // console.log(dateTime);
    e.preventDefault();
    const post = {
      title: this.state.title,
      body: this.state.body,
      date: currentDate
    };
    database.push(post);
    this.setState({
      title: '',
      date: '',
      body: ''
    });
  }

  onBodyChange(e, delta, source, editor) {
    //ReactQuill return 1 when input is empty
    const isBodyEmpty = editor.getContents().length() > 1;
    const isSubmitionAllowed = this.state.isTitleEmpty && isBodyEmpty;
    this.setState({
      body: e,
      isBodyEmpty: isBodyEmpty,
      isSubmitionAllowed: isSubmitionAllowed
    });
  }

  onTitleChange(e) {
    const isTitleEmpty = e.target.value.length !== 0;
    const isSubmitionAllowed = this.state.isBodyEmpty && isTitleEmpty;
    this.setState({
      title: e.target.value,
      isTitleEmpty: isTitleEmpty,
      isSubmitionAllowed: isSubmitionAllowed
    });
  }


  render() {
    return (
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <div className="form-group">
            <input
              value={this.state.title}
              type="text"
              name="title"
              placeholder="Title"
              onChange={this.onTitleChange}
              ref="title"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <ReactQuill
              modules={Form.modules}
              formats={Form.formats}
              value={this.state.body}
              placeholder="Body"
              onChange={this.onBodyChange}
            />
          </div>
          <button
            className="btn btn-primary"
            id="btn"
            disabled={this.state.isSubmitionAllowed ? null : 'disabled'}
          >
            Post
            </button>
        </form>
        <hr className="hrDiivide" />
      </div>
    );
  }
}



Form.modules = {
  toolbar: [
    [{ 'header': '1' }, { 'header': '2' }, { 'font': [] }],
    [{ 'size': [] }],
    ['bold', 'italix', 'underline', 'strike', 'blockquote'],
    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
    ['link', 'image', 'video'],
    ['clean'],
    ['code-block']
  ]
};

Form.formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
]
