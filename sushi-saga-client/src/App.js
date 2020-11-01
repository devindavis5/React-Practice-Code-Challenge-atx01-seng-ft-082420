import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import AddMoney from './components/AddMoney';

const API = "http://localhost:3000/sushis"

class App extends Component {
  constructor() {
    super()

    this.state = {
      sushiList: [],
      startI: 0,
      plates: [],
      moneyLeft: 100,
      eaten: []
    }
  }

  componentDidMount() {
    fetch(API)
    .then(res => res.json())
    .then(sushis => this.setState({sushiList: sushis}))
  }

  nextFour = () => {
    this.setState({startI: this.state.startI + 4})
    if (this.state.startI >= this.state.sushiList.length - 4) {
      this.setState({startI: this.state.startI = 0})
    }
  }

  addPlate = (cost, sushi) => {
    this.state.plates.push(1)
    this.setState({moneyLeft: this.state.moneyLeft - cost})
    sushi.img_url = ''
    this.state.eaten.push(sushi)
  }

  addFunds = (amount) => {
    this.setState({moneyLeft: this.state.moneyLeft + parseInt(amount)})
  } 

  render() {
    const sushi = this.state.sushiList.slice(this.state.startI, this.state.startI + 4)
    return (
      <div className="app">
        <SushiContainer sushi={sushi} nextFour={this.nextFour} addPlate={this.addPlate} moneyLeft={this.state.moneyLeft}/>
        <AddMoney addFunds={this.addFunds}/>
        <Table plates={this.state.plates} moneyLeft={this.state.moneyLeft}/>
      </div>
    );
  }
}

export default App;