import React from 'react';
import logo from './WhatsApp.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '+27',
      message: 'Hi there'
    };
    this.doSubmit = this.doSubmit.bind(this);
    this.doNumberChange = this.doNumberChange.bind(this);
    this.doMessageChange = this.doMessageChange.bind(this);
  }

  doNumberChange(event) {
    this.setState({number: event.target.value});
  }

  doMessageChange(event) {
    this.setState({message: event.target.value});
  }
  
  doSubmit(event) {
    window.location.href = 'https://wa.me/' + this.state.number + '?text=' + this.state.message;
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <form onSubmit={this.doSubmit}>
            <label>
              Number:
              <input type="text" name="number" value={this.state.number} onChange={this.doNumberChange} />
            </label>
            <label>
              Message (Optional):
              <input type="text" name="message" value={this.state.message} onChange={this.doMessageChange} />
            </label>
            <input type="submit" value="Start Chatting" />
          </form>
        </header>
      </div>
    );
  }
}

export default App;
