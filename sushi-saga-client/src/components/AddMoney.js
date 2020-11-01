import React from 'react'

class AddMoney extends React.Component {
    constructor() {
        super()
        this.state = {
            amount: 0
        }
    }

    handleChange = (e) => {
        this.setState({amount: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addFunds(this.state.amount)
    }

    render() {
        return (
        <form onSubmit={this.handleSubmit}>
            Add Money: <input onChange={this.handleChange} type="number" name="amount"></input>
            <input type="submit" value="Confirm"/>
        </form>
        )
    }
}

export default AddMoney