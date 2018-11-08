import manageJss from "@microsoft/fast-jss-manager-react";
import React from "react";

const styles = {
    knight: {
        fontSize: "80pt",
        width: "100%",
        textAlign: "center",
        display: "block"
    }
}

function Knight(props) {
    return <span className={props.managedClasses.knight}>♘</span>
}

export default manageJss(styles)(Knight)
