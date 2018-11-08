import React from "react";
import manageJss from "@microsoft/fast-jss-manager-react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import Square from "./square";
import Knight from "./knight";

const styles = {
    board: {
        width: "100%",
        height: "100%",
        display: "grid",
        gridTemplateRows: "repeat(9, 1fr)",
        gridTemplateColumns: "repeat(9, 1fr)"
    }
}

function Board(props) {
    const squares = new Array(81).fill(0).map((item, index) => {
        const x = index % 9;
        const y = Math.floor(index / 9);

        return (
            <Square key={`${x}, ${y}`} onClick={props.onSquareClick.bind(this, [x, y])}>
                { props.knightPosition[0] === x && props.knightPosition[1] === y ? <Knight /> : null }
            </Square>
        );
    });

    return (
        <DragDropContextProvider backend={HTML5Backend}>
            <div className={props.managedClasses.board}>
                {squares}
            </div>
        </DragDropContextProvider>
    );
}

export default manageJss(styles)(Board);
