import React, { Component } from 'react';
import axios from 'axios'
// import firebase from './firebase';
// import MovieDetails from './components/MovieDetails';
import Gallery from './components/Gallery'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movie: [],
      userInput: '',
      showResults: false
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.userInput.trim() === "") {
      alert("Please select the movie you want to see!")
    } 
    else { 
    this.searchMovies();
    this.setState({
      userInput: '',
      showResults: true
    })
  }
}

  searchMovies = () => {
    axios({
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      dataResponse: 'json',
      params: {
        api_key: '2e86861dd566ea2f61741d264de6590a',
        language: 'en-US',
        page: 1,
        query: this.state.userInput
      }
    })
    .then((response) => {
      this.setState({ movie: response.data.results })
    });
  }

  render() {
    return (
      <div className="App">
        <header>
          <div className="Wrapper">
            <div className="Container">
              <h1>Quick Pick Flicker</h1>
              <form action="submit" onSubmit={this.handleSubmit} >
                <input
                  type="text"
                  placeholder="Type a movie"
                  onChange={this.handleChange}
                  name="userInput"
                  value={this.state.userInput}
                />
                <button onClick={ this.handleSubmit }> Search </button>
              </form>
            </div>
          </div>
        </header>
        <Gallery
          movieInfo={this.state.movie}
        />
      </div>
    );
  }
}
export default App;