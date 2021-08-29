import React from 'react';
import './App.css';
import lubach from './lubach.png'
import Deepfake from './components/deepfake/Deepfake';
import Modal from 'react-modal';


type AppProps = {

}

type AppState = {
  randomNumber: number,
  modalIsOpen: boolean,
  modalText: string,
  imgHash: number,
  numberOfPlays: number,
}

class App extends React.Component<AppProps, AppState> {
  state: AppState = {
    randomNumber: Math.random(),
    modalIsOpen: false,
    modalText: "Schipaanboord!!! 🚢",
    imgHash: Date.now(),
    numberOfPlays: 0,
  };

  openModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ randomNumber: Math.random(), modalIsOpen: false, numberOfPlays: this.state.numberOfPlays + 1 });
  };

  pressImage(isFake: boolean) {
    if (!isFake) {
      this.setState({ modalText: "Schipaanboord!!! 🚢", modalIsOpen: true, imgHash: Date.now() });
    } else {
      this.setState({ modalText: "Aww jammer, fout! Dit is een deepfake 🤖", modalIsOpen: true, imgHash: Date.now() });
    }
  }

  render() {
    const isFake = this.state.randomNumber < 0.5;

    return (
      <div>
        <header className="Header">
          <div className="Letters-deepfake">DEEPFAKE</div>
          <div className="Letters-of">OF</div>
          <div className="Letters-schipaanboord">SCHIPAANBOORD?</div>
        </header>

        <main className="Main-images">
          <div className="Left-image">
            <Deepfake isFake={isFake} onClick={() => this.pressImage(isFake)} imgHash={'' + this.state.imgHash} />
          </div>
          <div className="Right-image">
            <Deepfake isFake={!isFake} onClick={() => this.pressImage(!isFake)} imgHash={'' + this.state.imgHash} />
          </div>
        </main>
        {this.state.numberOfPlays > 0
          ? <div className="Bottom-text">
            <div className="Speech-bubble">Is ook eigenlijk maar één keer leuk</div>
            <img src={lubach} width="50" alt="Lubach" className="Lubach" />
          </div>
          : <div className="Bottom-text"></div>
        }
        <Modal isOpen={this.state.modalIsOpen} onRequestClose={this.closeModal} ariaHideApp={false} className="Modal-image">
          <div>
            <div className="Modal-inner">
              <div>{this.state.modalText}</div>
              <button onClick={this.closeModal} className="Modal-button">Nog een keer!</button>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default App;
