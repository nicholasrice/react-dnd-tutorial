import React from "react";
import manageJss from "@microsoft/fast-jss-manager-react";

const styles = {
    square: {
        width: "100%",
        height: "100%",
        "&:nth-child(n+1)": {
            background: "black",
            color: "white"
        },
        "&:nth-child(2n+1)": {
            background: "white",
            color: "black"
        }
    }
}

function Square(props) {
    return (
        <div
            className={props.managedClasses.square}
            onClick={props.onClick}
        >
            {props.children}
        </div>
    )
}

export default manageJss(styles)(Square);
