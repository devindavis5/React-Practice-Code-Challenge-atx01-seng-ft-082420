import React, { Component, Fragment } from 'react';

class Sushi extends Component {
  constructor() {
    super()
    
    this.state = {
      clicked: false
    }
  }

  handleClick = () => {
    if (this.props.moneyLeft > this.props.sushi.price) {
      this.setState({clicked: true})
      this.props.addPlate(this.props.sushi.price, this.props.sushi)
    } else {
      alert('You are out of money! :( Please add funds to continue eating.')
    }
  }

  render () {
  const sushi = this.props.sushi
    return (
      <div className="sushi">
        <div className="plate" 
            onClick={this.handleClick}>
          { this.state.clicked ? null : <img src={sushi.img_url} width="100%" /> }
        </div>
        <h4 className="sushi-details">
          {sushi.name} - ${sushi.price}
        </h4>
      </div>
    )
  }   
}

export default Sushi