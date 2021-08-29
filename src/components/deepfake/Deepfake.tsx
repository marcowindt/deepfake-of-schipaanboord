import React, { Component, MouseEventHandler } from 'react';
import '../../App.css';


type DeepfakeProps = {
    isFake: boolean,
    onClick: MouseEventHandler,
    imgHash: string,
}

class Deepfake extends Component<DeepfakeProps> {
    render() {
        return (
            <img
                className="Choose-image"
                src={this.props.isFake
                    ? 'https://thispersondoesnotexist.com/image?' + this.props.imgHash
                    : '/schipaanboord.jpg?' + this.props.imgHash}
                onClick={this.props.onClick}
                alt="Deepfake of schipaanboord?"
            />
        );
    }

}

export default Deepfake;
