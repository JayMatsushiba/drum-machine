'use strict';



class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
    }

    // need to loop through drumArray and create DrumPad for each one 
    
    render() {
        return (
            // need to pass properties of each drumArray object to the DrumPad map
            <div>
                <h1>Drum Machine</h1>
                <DrumPadArray drumInfoArray={drumInfoArray}/>
            </div>
        )
    }
}

const DrumPadArray = ({drumInfoArray}) => (
    <div>
        {drumInfoArray.map(drumPad => (
            <DrumPad key={drumPad.KC} keyboardInput={drumPad.key}/>
        ))}
    </div>
);

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        // DrumPad needs to take props handed from DrumMachine, expecting key, link and KC properties
    }

    render() {
        return(
            <div className="drum-pad">{this.props.keyboardInput}</div>
        )
    }
}


const drumInfoArray = [
    {key: 'Q', link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81},
    {key: 'W', link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87},
    {key: 'E', link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69},
    {key: 'A', link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65},
    {key: 'S', link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83},
    {key: 'D', link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68},
    {key: 'Z', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90},
    {key: 'X', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88},
    {key: 'C', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67}
  ]

ReactDOM.render(<DrumMachine />, document.getElementById('drum-machine'))