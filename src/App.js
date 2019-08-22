/* eslint no-eval: 0 */
import React from "react";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      display: "0"
    };
  }

  handleChange = event => {
    let { value } = event.target;
    switch (value) {
      case "9":
      case "8":
      case "7":
      case "6":
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
      case "0":
        this.setState(state => {
          return {
            display:
              state.display === "0"
                ? state.display.slice(1) + value
                : (state.display += value)
          };
        });
        break;
      case ".":
        this.setState(state => {
          if (state.display.includes(".") && state.display.includes("+")) {
            return {
              display: state.display + "."
            };
          } else if (
            state.display.includes(".") &&
            state.display.includes("-")
          ) {
            return {
              display: state.display + "."
            };
          } else if (
            state.display.includes(".") &&
            state.display.includes("/")
          ) {
            return {
              display: state.display + "."
            };
          } else if (
            state.display.includes(".") &&
            state.display.includes("*")
          ) {
            return {
              display: state.display + "."
            };
          } else if (state.display.includes(".")) {
            return {
              display: state.display
            };
          } else {
            return {
              display: state.display + "."
            };
          }
        });
        break;
      case "clear":
        this.setState({
          display: "0"
        });
        break;
      case "+":
        this.setState(state => {
          if (state.display.slice(-1) === "+") {
            return {
              display: state.display
            };
          } else if (state.display.includes("*-")) {
            return {
              display: state.display.replace("*-", "+")
            };
          } else if (state.display.slice(-1) === "*") {
            return {
              display: state.display.replace("*", "+")
            };
          } else if (state.display.slice(-1) === "/") {
            return {
              display: state.display.replace("/", "+")
            };
          } else if (state.display.slice(-1) === "-") {
            return {
              display: state.display.replace("-", "+")
            };
          } else {
            return {
              display: state.display + "+"
            };
          }
        });
        break;
      case "-":
        this.setState(state => {
          if (state.display.slice(-1) === "-") {
            return {
              display: state.display
            };
          } else {
            return {
              display: state.display + "-"
            };
          }
        });
        break;
      case "x":
        this.setState(state => {
          if (state.display.slice(-1) === "*") {
            return {
              display: state.display
            };
          } else if (state.display.includes("+-")) {
            return {
              display: state.display.replace("+-", "*")
            };
          } else if (state.display.slice(-1) === "+") {
            return {
              display: state.display.replace("+", "*")
            };
          } else if (state.display.slice(-1) === "/") {
            return {
              display: state.display.replace("/", "*")
            };
          } else if (state.display.slice(-1) === "-") {
            return {
              display: state.display.replace("-", "*")
            };
          } else {
            return {
              display: state.display + "*"
            };
          }
        });
        break;
      case "/":
        this.setState(state => {
          if (state.display.slice(-1) === "/") {
            return {
              display: state.display
            };
          } else if (state.display.includes("*-")) {
            return {
              display: state.display.replace("*-", "/")
            };
          } else if (state.display.slice(-1) === "*") {
            return {
              display: state.display.replace("*", "/")
            };
          } else if (state.display.slice(-1) === "+") {
            return {
              display: state.display.replace("+", "/")
            };
          } else if (state.display.slice(-1) === "-") {
            return {
              display: state.display.replace("-", "/")
            };
          } else {
            return {
              display: state.display + "/"
            };
          }
        });
        break;
      case "=":
        this.setState(state => {
          return {
            display: Number(eval(state.display).toFixed(9)).toString()
          };
        });
        break;
      default:
        break;
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <div id="display">
            <span id="numbers">{this.state.display}</span>
          </div>
          <button id="clear" value="clear" onClick={this.handleChange}>
            AC
          </button>
          <button id="divide" value="/" onClick={this.handleChange}>
            /
          </button>
          <button id="multiply" value="x" onClick={this.handleChange}>
            X
          </button>
          <button id="seven" value="7" onClick={this.handleChange}>
            7
          </button>
          <button id="eight" value="8" onClick={this.handleChange}>
            8
          </button>
          <button id="nine" value="9" onClick={this.handleChange}>
            9
          </button>
          <button id="subtract" value="-" onClick={this.handleChange}>
            -
          </button>
          <button id="four" value="4" onClick={this.handleChange}>
            4
          </button>
          <button id="five" value="5" onClick={this.handleChange}>
            5
          </button>
          <button id="six" value="6" onClick={this.handleChange}>
            6
          </button>
          <button id="add" value="+" onClick={this.handleChange}>
            +
          </button>
          <button id="one" value="1" onClick={this.handleChange}>
            1
          </button>
          <button id="two" value="2" onClick={this.handleChange}>
            2
          </button>
          <button id="three" value="3" onClick={this.handleChange}>
            3
          </button>
          <button id="equals" value="=" onClick={this.handleChange}>
            =
          </button>
          <button id="zero" value="0" onClick={this.handleChange}>
            0
          </button>
          <button id="decimal" value="." onClick={this.handleChange}>
            .
          </button>
        </div>
      </div>
    );
  }
}

export default App
