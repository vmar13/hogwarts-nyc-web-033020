import React from 'react'

const convert = string => string.toLowerCase().split(' ').join('_')

class HogTile extends React.Component {

    state = {
        display: false
    }

    toggleDisplay = () => {
        this.setState({
            display: !this.state.display
        })
    }

    pigImage = require(`../hog-imgs/${convert(this.props.name)}.jpg`)

    renderDetails = () => {
        return (
        <div>
            <p>Highest award: {this.props['highest medal acheived']}</p>
            <p>Specialty: {this.props.specialty}</p>
            <p>Weight: {this.props.weight} lbs</p>
            <p>{this.props.greased ? 'Greased' : 'Not Greased'} </p>
        </div>
    )}


    render() {
        // console.log(this.state)

        return (
            <div className='ui eight wide column'>
                <h2>{this.props.name}</h2>
                <img src={this.pigImage} alt={''}/>
                {/* conditionally render details */}
                {this.state.display ? this.renderDetails() : null}
                <button onClick={this.toggleDisplay}>
                    {this.state.display ? 'Hide Details' : 'Show Details'}
                </button>
            </div>
        )
    }
}

export default HogTile 