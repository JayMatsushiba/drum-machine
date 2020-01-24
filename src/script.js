'use strict';



class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentInstrument: ''
        }
    }

    // need to loop through drumArray and create DrumPad for each one 
    
    render() {
        return (
            // need to pass properties of each drumArray object to the DrumPad map
            <div id="display">
                <h1>Drum Machine</h1>
                <DrumPadArray drumInfoArray={drumInfoArray}/>
            </div>
        )
    }
}

const DrumPadArray = ({drumInfoArray}) => (
    <div>
        {drumInfoArray.map(drumPad => (
            <DrumPad key={drumPad.KC} id={drumPad.KC} keyCode={drumPad.KC} keyboardInput={drumPad.key} audio={drumPad.link}/>
        ))}
    </div>
);

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        // DrumPad needs to take props handed from DrumMachine, expecting key, link and KC properties
        this.handleClick = this.handleClick.bind(this);
        this.handleKeypress = this.handleKeypress.bind(this);
    }

    componentDidMount() {
        document.addEventListener("keydown", this.handleKeypress)
    }
    componentWillUnmount() {
        document.removeEventListener("keydown", this.handleKeypress)
    }

    handleClick() {
        $("#"+this.props.keyboardInput).trigger("play");
    }
    handleKeypress(event) {
        if(event.keyCode === this.props.keyCode) {
            $("#"+this.props.keyboardInput).trigger("play");
        }
    }

    render() {
        return(
            <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
                <button>{this.props.keyboardInput}</button>
                <audio className="clip" id={this.props.keyboardInput} src={this.props.audio}></audio>
            </div>
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