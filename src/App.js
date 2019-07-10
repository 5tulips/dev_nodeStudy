import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class Subject extends Component{

  render(){
    return (
        <header>
          <h1>{this.props.name}</h1>
          World wide web
        </header>
    );
  }
}


class Nav extends Component{

  render(){
    return (
      <nav>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JAVASCRIPT</a></li>
        </ul>
      </nav>
    );
  }
}

class Article extends Component{

  render(){
    return (
      <article>
        <h2>HTML</h2>
        HTML is HyperText Markup Language
      </article>
    );
  }
}



class App extends Component{

  render(){
    return (
      <div className="App">
        <Subject name ="WORLD"></Subject>
        <Subject name ="WIDE"></Subject>
        <Nav></Nav>
        <Article></Article>
      </div>
    );
  }
}

export default App;
