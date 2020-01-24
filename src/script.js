'use strict';

const drumArray = [
    {Q:  'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', KC: 81},
    {W: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', KC: 87},
    {E: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3', KC: 69},
    {A: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', KC: 65},
    {S: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3", KC: 83},
    {D: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3', KC: 68},
    {Z: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3', KC: 90},
    {X: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3', KC: 88},
    {C: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3', KC: 67}
  ]

class DrumPad extends React.Component {
    constructor(props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (e) => {
        console.log('you hit the snare');
        
    }

    render() {
        return(
            <div onClick={this.handleClick}>Change colour</div>
        )
    }
}




ReactDOM.render(<DrumPad />, document.getElementById('drum-machine'))