import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css'
import Season from './Season'
import Loading from './Loading'


class App extends React.Component {
  state = { lat: null, errorMessage: ''};

  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message})
    );
  }

  render() {
    if(this.state.errorMessage && !this.state.lat){
      return (<div>Error: {this.state.errorMessage}</div>)
    }
    if(!this.state.errorMessage && this.state.lat) {
      return <Season lat={this.state.lat} />
    }

    return <Loading message="Please accept location request :)" />
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
)