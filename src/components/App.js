import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes';
import Fish from './Fish';




class App extends React.Component {

  constructor() {
    // Super allows you to use 'this' keyword
    super();
    // bind the addFish method to the app itself
    this.addFish = this.addFish.bind(this);
    this.loadSamples = this.loadSamples.bind(this);
    this.addToOrder = this.addToOrder.bind(this);

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

  loadSamples() {
    this.setState({
      fishes: sampleFishes
    })
  }

  addToOrder(key) {
    console.log(key);

    // take a copy of state
    const order = {...this.state.order};
    // update or add the new number of fish ordered
    order[key] = order[key] + 1 || 1;
    // update our state
    this.setState({ order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="list-of-fishes">
            {
              Object.keys(this.state.fishes)
                    .map(key => <Fish key={key}
                                      index={key}
                                      details={this.state.fishes[key]}
                                      addToOrder={this.addToOrder}
                                />)
            }
          </ul>
        </div>
          <Order />
          <Inventory addFish={this.addFish} loadSamples={this.loadSamples}/>
      </div>
    )
  }
}

export default App;
