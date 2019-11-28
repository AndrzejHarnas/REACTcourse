import React, { Component } from 'react';
import Validation from './Validation/Validation';
import './App.css';
import CharComponent from './charComponent/charComponent';

class App extends Component {

state = {
  text: ''
}

changeTextHandler = (event) => {
this.setState({
  text: event.target.value
})
}



render() {

  const style = {
    display: 'flex'
  }



let setOfChar = null
  if(this.state.text.length>0)
   {

    setOfChar = (
      <div>
      {[...this.state.text].map((item) => {
        return ( <CharComponent charText={item} style={style} /> )
      })}
      </div>
                )
  }
  else
  {
    setOfChar = null
  }




return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
      <div>
      <input type='text' onChange = {(event)=>this.changeTextHandler(event)}/>
      </div>

      <p> {this.state.text} </p>
      <Validation textLenght={this.state.text.length} />
      { setOfChar }

      </div>
    );
  }
}

export default App;
