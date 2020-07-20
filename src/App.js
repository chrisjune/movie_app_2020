import React from 'react';
import axios  from 'axios';

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [],
  }

  render(){
    const { isLoading } = this.state;
    const { movies } = this.state;

    return <div>{isLoading ? 'Loading...': movies}</div>
  }

  getMovies = async () =>{
    const {
      data:{
        data:{ movies },
        }
      } = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    // this.setState({movies:movies});
    this.setState({ movies, isLoading:false});
  }
  componentDidMount(){
    this.getMovies();
  }
}


export default App;
