import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {

  constructor() {
    // Super allows you to use 'this' keyword
    super();
    // bind the addFish method to the app itself
    this.addFish = this.addFish.bind(this);
    // Get Initial State
    this.state = {
      fishes: {},
      order: {}
    }
  }

  addFish(fish) {
    // update our state
    // essentially gets copy of current state
    const fishes = {...this.state.fishes}
    // add in our new fish - using timestamp as fish id
    const timestamp = Date.now();
    fishes[`fish=${timestamp}`] = fish;
    // set state
    this.setState({fishes: fishes});
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
          <Order />
          <Inventory addFish={this.addFish} />
      </div>
    )
  }
}

export default App;
