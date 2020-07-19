import React from 'react';

class App extends React.Component{
  state = {
    'count': 0
  }
  constructor(props){
    super(props);
    console.log('hello');
  }
  render() {
    console.log('render');
    return (<div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>

      </div>)
  }

  componentDidMount(){
    console.log('mount');
  }

  componentDidUpdate(){
    console.log('update');
  }

  componentWillUnmount(){
    console.log('die');
  }

  add = () => {
    console.log('add');
    this.setState(current=>({
      count:current.count + 1,

    }))
  }
  minus = () => {
    console.log('minus');
    this.setState(current=>({
      count:current.count - 1,

    }))
  }
}
export default App;
