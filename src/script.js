'use strict';



class DrumMachine extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentInstrument: 'Welcome!'
        }
        this.displayInstrument = this.displayInstrument.bind(this)
    }

    // need to loop through drumArray and create DrumPad for each one 
    displayInstrument(selectedInstrument) {
        this.setState({
            currentInstrument: selectedInstrument
        })
    }

    render() {
        return (
            // need to pass properties of each drumArray object to the DrumPad map
            <div id="display" >
                <h1>DRUM MACHINE</h1>
                <h2>{this.state.currentInstrument}</h2>
                <div className="container">
                    {drumInfoArray.map(drumPad => (
                        <DrumPad displayInstrument={this.displayInstrument} 
                        instrument={drumPad.instrument}
                        key={drumPad.KC} id={drumPad.KC} keyCode={drumPad.KC} keyboardInput={drumPad.key} audio={drumPad.link} />
                    ))}
                </div>                
            </div>
        )
    }
}

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
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
        
        // removes active class from all other buttons, then adds active class to last button pressed
        $(".drum-button").removeClass("active");
        $('#'+this.props.keyboardInput + 1).addClass("active");

        this.props.displayInstrument(this.props.instrument);
    }
    handleKeypress(event) {
        if(event.keyCode === this.props.keyCode) {
            $("#"+this.props.keyboardInput).trigger("play");

            // removes active class from all other buttons, then adds active class to last button pressed
            $(".drum-button").removeClass("active");
            $('#'+this.props.keyboardInput + 1).addClass("active");

            this.props.displayInstrument(this.props.instrument);
        }
    }

    render() {
        return(
            <div id={this.props.id} className="drum-pad" onClick={this.handleClick}>
                <button className="drum-button" id={this.props.keyboardInput + 1}>{this.props.keyboardInput}</button>
                <audio className="clip" id={this.props.keyboardInput} src={this.props.audio}></audio>
            </div>
        )
    }
}


const drumInfoArray = [
    {key: 'Q', link: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81, instrument: "Kick"},
    {key: 'W', link: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87, instrument: "Snare"},
    {key: 'E', link: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69, instrument: "Closed Hi-hat"},
    {key: 'A', link: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65, instrument: "Hi-hat"},
    {key: 'S', link: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83, instrument: "Heater 3"},
    {key: 'D', link: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68, instrument: "Rim"},
    {key: 'Z', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90, instrument: "Heater 4"},
    {key: 'X', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88, instrument: "Heater 2"},
    {key: 'C', link: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67, instrument: "Heater 1"}
  ]

ReactDOM.render(<DrumMachine />, document.getElementById('drum-machine'))