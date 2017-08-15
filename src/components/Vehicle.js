import React, { Component } from 'react'

class Vehicle extends Component {
  render () {
    return <div className='Vehicle'>
      <ul>
        {this.props.vehicles.map((ship) => {
          return <li className='vehicleBox' key={ship.name}>
            <h4> {ship.name} </h4>
            <p> Model: {ship.model} </p>
            <p> Manufacturer: {ship.manufacturer} </p>
            <p> Class: {ship.vehicle_class} </p>
            <p> Crew: {ship.crew} </p>
            <p> Passangers: {ship.passengers} </p>
            <p> Cargo Capacity: {ship.cargo_capacity} </p>
          </li>
        })}
      </ul>
    </div>
  }
}

export default Vehicle
