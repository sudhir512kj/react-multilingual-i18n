import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./services/localizationService";

class App extends React.Component {
  changeLanguage = e => {
    window.changeLanguage(e.target.dataset.langauge);
    this.forceUpdate();
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {i18n("Learn React")}
          </a>
          <img
            src="https://bit.ly/2NR57Sj"
            alt="en"
            data-language="en"
            onClick={this.changeLanguage}
          />
          <img
            src="https://bit.ly/36C7DV5"
            alt="hu"
            data-language="hu"
            onClick={this.changeLanguage}
          />
        </header>
      </div>
    );
  }
}

export default App;
