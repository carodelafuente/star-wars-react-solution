import React, {Component} from 'react';
import Vehicle from './Vehicle'
import '../styles/App.css';

class App extends Component {

  // PROPS AND STATE
  // Set props and state below.
  // You should set state for vehicles (empty array), value (empty string), pilot (empty) string.
  // Enter your code below:
  constructor(props) {
    super(props);

    this.state = {
      vehicles: [],
      value: '',
      pilot: ''
    }

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }



  // FORM: HANDLE INPUT CHANGES
  // handleNameChange below:
  // See form lesson for details.
  // Enter your code below:

handleNameChange(e) {
  e.preventDefault()
  this.setState({ pilot: e.target.value })
  console.log(this.state.pilot)
}

//  FORM: SUBMIT METHOD
// handleSubmit below:
// See form lesson for details.
// Once the form is sumbited, two things need to happen: set the state of pilot to the input value.
// Then, set the value of the input back to an empty string.
// Enter your code below:

handleSubmit(e) {
  e.preventDefault();
  console.log(this.state.pilot + ' was submitted')
}


  // LIFECYCLE
  // Which lifecycle is best for fetching data?
  // Inside this lifecycle, you will fetch the vehicles from here: https://swapi.co/api/vehicles/
  // Once you have fetched that data, set the state of vehicles to the fetched data.
  // In your response look for 'results'. It should return this array.
  // You will want to use this array when you set the state of 'vehicles'. You will need this data in your render.
  // Enter your code below:

componentDidMount() {
  const API = 'https://swapi.co/api/vehicles/'
  window.fetch(API)
  .then(r => r.json())
  .then(data => {
    this.setState({
      vehicles: data.results
    })
    console.log(this.state.vehicles)
  })
}



  // RENDER
  // Before you can map over the data you've fetched, you will first need to store that 'state' in a variable.
  // Map over the data.
  // Don't forget to set the 'key'. In this case, use the vehicle name.
  // You will need the following values: name, model, manufacturer, class, passengers, crew, length, max speed, and cargo capacity.
  // Rendering: create a 'card' for each of the vehicles. consult the Bootstrap 4 docs for details.
  // Enter your code below:

  render() {
    /*
    Store vehicles state in a variable.
    Map over this variable to access the values needed to render.
    */

    return (
      <div className="App">
        <div className='header'>
          <h2> Star Wars </h2>
          <p> The Vehicles of Star Wars </p>
        </div>
        <div className='nameForm'>
          <h2> What is your name, Pilot? </h2>
          <form onSubmit={this.handleSubmit}>
            <input name='pilot' value={this.state.pilot} type='text' onInput={this.handleNameChange} />
            <input type='submit' value='Submit' />
            <span> {this.state.pilot} </span>
          </form>
        </div>
        <div className='vehicle'>
        <Vehicle vehicles={this.state.vehicles} />
        </div>
      </div>
    );
  }
}

export default App;
