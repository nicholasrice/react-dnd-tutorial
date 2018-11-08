import React, { Component } from 'react';
import { jss } from "@microsoft/fast-jss-manager-react";
import Board from "./board";

jss.createStyleSheet({
    "@global": {
        "html, body, #root": {
            width: "100%",
            height: "100%"
        }
    }
}).attach();


class App extends Component {
    constructor() {
        super();

        this.state = {
            position: [8, 0]
        }

        this.onSquareClick = this.onSquareClick.bind(this);
    }

    onSquareClick(position) {
        this.setState({position});
    }

    render() {
        return (
            <Board knightPosition={this.state.position} onSquareClick={this.onSquareClick} />
    );
  }
}

export default App;
