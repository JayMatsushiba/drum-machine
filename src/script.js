'use strict';

// const drums = [
//     {
//         name: "Snare",
//         sound: 'https://actions.google.com/sounds/v1/impacts/hit_with_metal_tray.ogg',
//         keyTrigger: 'Q'
//     },
//     {
//         name: "Hihat",
//         sound: 'chick',
//         keyTrigger: 'W'
//     },
//     {
//         name: "Bass Drum",
//         sound: 'https://actions.google.com/sounds/v1/impacts/reverberating_slam.ogg',
//         keyTrigger: 'E'
//     }
// ]

const drum = {
    name: "Snare",
    sound: 'https://actions.google.com/sounds/v1/impacts/hit_with_metal_tray.ogg',
    keyTrigger: 'Q'
}

const activeStyle = {
    backgroundColor: 'red'
}

const inactiveStyle = {
    backgroundColor: 'green'
}

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            style: inactiveStyle
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState = {
            style: activeStyle
        }
        console.log('clicked');
    }
    render() {
        return(
            <div>
                <button onClick={this.handleClick} style={this.state.style}>Press me and change colour</button>
            </div>
        )
    }
}




ReactDOM.render(<DrumPad />, document.getElementById('drum-machine'))