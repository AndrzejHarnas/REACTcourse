import React, { Component } from 'react';
import axios from 'axios';

import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

postDataHandler = () => {
  const data = {
    title: this.state.title,
    body: this.state.content,
    author: this.state.author
  };
  axios.post('/posts', data)

//fetch('https://jsonplaceholder.typicode.com/posts',{
//  mode: 'no-cors',
//  method: 'POST',
//  body: JSON.stringify(data),
//  headers: {
//  "Content-type": "application/json; charset=UTF-8"
//  }
//})
.then((response) => {
    console.log(response)
  });
}

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick = {this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;
